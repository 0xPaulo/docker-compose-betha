import { DatePipe } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatRadioChange } from "@angular/material/radio";
import { MatSelectChange } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { TabelaTecnicoComponent } from "src/app/components/dialog/tabela-tecnico/tabela-tecnico.component";
import { ChamadoCompleto } from "src/app/interfaces/chamadoCompleto";
import { ImgProxyService } from "src/app/services/img-proxy.service";
import { TabelaService } from "src/app/services/tabela.service";
import { CadastroService } from "./../../../services/cadastro.service";
import { TecnicoService } from "./../../../services/tecnico.service";

@Component({
  selector: "app-form-manu-tec",
  templateUrl: "./form-manu-tec.component.html",
  styleUrls: ["./form-manu-tec.component.scss"],
})
export class FormManuTecComponent implements OnInit {
  form: FormGroup;
  id = "";
  dia = "";

  tecnicosCompleto!: any[];
  tecnicosNomes!: string[];

  tecnicoNomeSelecionado = "";
  tecnicoEspecialidadeSelecionado = "";
  tecnicoChamadosSelecionado: number = 0;
  imagemTecnico: any;
  tecnicoID!: number;

  tecnicoImg!: string | ArrayBuffer;

  msgDeErro!: string;

  imageUrl: string[] = [];

  motivoNaoConclusao = "";

  cadastros$!: Observable<ChamadoCompleto[]>;

  constructor(
    private imgProxyService: ImgProxyService,
    private dialogRef: MatDialogRef<any, boolean>,
    private tecnicoService: TecnicoService,
    private cadastroService: CadastroService,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private tabelaService: TabelaService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.infoCadastro.id;
    this.form = formBuilder.group({
      clienteNome: [data.infoCadastro.clienteNome],
      clienteEndereco: [data.infoCadastro.clienteEndereco],
      clienteTelefone: [data.infoCadastro.clienteTelefone],
      clienteEmail: [data.infoCadastro.clienteEmail],
      nomeItem: [data.infoCadastro.nomeItem],
      itemSerie: [data.infoCadastro.itemSerie],
      status: [data.infoCadastro.status],
      dataEntrada: [data.infoCadastro.dataEntrada],
      defeitoRelatado: [data.infoCadastro.defeitoRelatado],
      image_urls: [data.infoCadastro.image_urls],
      custoEstimado: [data.infoCadastro.custoEstimado],
      analiseTecnica: [data.infoCadastro.analiseTecnica],
      tecnico: [data.infoCadastro.tecnico, Validators.required],
      tecnicoNome: [data.infoCadastro.tecnicoNome],
      tecnicoImg: [data.infoCadastro.tecnicoImg],
      tecnicoCategorias: [data.infoCadastro.tecnicoCategorias],
    });
    this.dia = data.infoCadastro.dataEntrada;
    this.motivoNaoConclusao = data.infoCadastro.motivoNaoConclusao;

    this.chamarBuscarTodos();
    if (this.data.infoCadastro.tecnico) {
      this.tecnicoNomeSelecionado = this.data.infoCadastro.tecnicoNome;
      this.tecnicoEspecialidadeSelecionado =
        this.data.infoCadastro.tecnicoCategorias;
      this.imagemTecnico = this.data.infoCadastro.tecnicoImg;
      this.tecnicoID = this.data.infoCadastro.tecnico;

      this.imgProxyService.getImage(this.imagemTecnico).subscribe((blob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          this.tecnicoImg = reader.result as string;
        };
        reader.readAsDataURL(blob);
      });
    }
  }
  onSelectionChange(event: MatSelectChange) {
    const tecnicoSelecionado = event.value;
    this.tecnicosCompleto.forEach((tecnico) => {
      if (tecnico.nome === tecnicoSelecionado) {
        this.tecnicoNomeSelecionado = tecnico.nome;
        this.tecnicoEspecialidadeSelecionado = tecnico.tecnicoCategorias;
        this.imagemTecnico = tecnico.imagem;
        this.tecnicoID = tecnico.id;
        this.tecnicoChamadosSelecionado = tecnico.chamados.length;
        this.msgDeErro = "";
      }
    });
    this.imgProxyService.getImage(this.imagemTecnico).subscribe((blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.tecnicoImg = reader.result as string;
      };
      reader.readAsDataURL(blob);
    });
  }
  verificaSubmit() {
    if (this.form.invalid) {
      this.msgDeErro = "Por favor, escolha um tecnico para o serviço";
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    const idItem = this.data.infoCadastro.id;
    this.tecnicoService.setTecnico(idItem, this.tecnicoID).subscribe(
      (result) => {
        this.dialogRef.close(true);
        this.onSucess();
        this.tabelaService.emitListaAtualizada.emit();
      },
      () => {
        this.onError();
      }
    );
  }

  chamarBuscarTodos(filtro?: string) {
    this.tecnicoService.buscarTodos(filtro).subscribe(
      (resultado) => {
        this.tecnicosCompleto = resultado;
        this.tecnicosNomes = resultado.map((obj: any) => obj.nome);
      },
      (error) => {
        console.error("Erro ao buscar técnicos:", error);
      }
    );
  }
  filtroTecnico(event: MatRadioChange) {
    const filtro = this.tecnicoService.handleFilter(event);
    this.chamarBuscarTodos(filtro);
  }

  verChamadosDoTecnico(idTecnico: number) {
    const dialogRef = this.dialog.open(TabelaTecnicoComponent, {
      data: { dados: idTecnico },
    });
    dialogRef.afterClosed().subscribe();
  }

  onError() {
    this.snackBar.open("Ocorreu um erro", "", { duration: 5000 });
  }
  onSucess() {
    this.snackBar.open("Atualizado com sucesso", "", { duration: 5000 });
  }
  ngOnInit(): void {
    if (this.data.infoCadastro.image_urls) {
      const imageUrls: string[] = this.data.infoCadastro.image_urls;
      imageUrls.forEach((url) => {
        this.imgProxyService.getImage(url).subscribe((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.imageUrl.push(reader.result as string);
          };
          reader.readAsDataURL(blob);
        });
      });
    }
  }
}

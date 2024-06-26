import { DatePipe } from "@angular/common";
import { ChangeDetectorRef, Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormChamado } from "src/app/interfaces/formChamado";
import { FormCliente } from "src/app/interfaces/formCliente";
import { ClienteService } from "src/app/services/cliente.service";
import { TabelaService } from "src/app/services/tabela.service";
import { CadastroService } from "./../../../services/cadastro.service";

@Component({
  selector: "form-criar-cadastro",
  templateUrl: "./form-criar-cadastro.component.html",
  styleUrls: ["./form-criar-cadastro.component.scss"],
})
export class FormCriarCadastroComponent {
  form: FormGroup;
  formChamado: FormGroup;
  isEditMode = false;
  activeTab = "cliente";
  inputDesabilitado = true;
  clienteRecebido!: FormCliente;
  clienteIdExiste = false;
  possuiCadastro = false;
  mostrarCliente = false;
  novoClienteSalvoNoBanco!: FormCliente;
  msgError!: string;
  msgErrorCadastro!: string;

  constructor(
    private dialogRef: MatDialogRef<any, boolean>,
    private changeDetector: ChangeDetectorRef,
    private cadastroService: CadastroService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private tabelaService: TabelaService,
    private clienteService: ClienteService,
    private datePipe: DatePipe,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.mostrarCliente = data.mostrarCliente;

    this.form = this.formBuilder.group({
      clienteNome: [null, Validators.required],
      clienteEndereco: [null, Validators.required],
      clienteTelefone: [null, Validators.required],
      clienteEmail: [null, [Validators.required, Validators.email]],
    });
    this.formChamado = formBuilder.group({
      clienteId: [null],
      nomeItem: [null, Validators.required],
      itemSerie: [null, Validators.required],
      dataEntrada: [null, Validators.required],
      defeitoRelatado: [null, Validators.required],
    });
  }

  verificaAndSubmit() {
    if (this.form.invalid) {
      this.msgError = "Por favor, preencha todos os campos.";
      console.debug(this.msgError);
    } else {
      this.onSubmitCliente();
    }
  }
  onSubmitCliente() {
    this.msgError = "";
    let clienteFormFields: FormCliente = {
      clienteNome: "",
      clienteEndereco: "",
      clienteTelefone: "",
      clienteEmail: "",
    };
    if (this.possuiCadastro) {
      clienteFormFields = {
        id: this.clienteRecebido.id,
        clienteNome: this.form.get("clienteNome")?.value,
        clienteEndereco: this.form.get("clienteEndereco")?.value,
        clienteEmail: this.form.get("clienteEmail")?.value,
        clienteTelefone: this.form.get("clienteTelefone")?.value,
      };
    } else {
      clienteFormFields = {
        clienteNome: this.form.get("clienteNome")?.value,
        clienteEndereco: this.form.get("clienteEndereco")?.value,
        clienteEmail: this.form.get("clienteEmail")?.value,
        clienteTelefone: this.form.get("clienteTelefone")?.value,
      };
    }

    this.clienteService.createCliente(clienteFormFields).subscribe(
      (resultado) => {
        this.novoClienteSalvoNoBanco = resultado;
        this.onSucess();
      },
      () => {
        this.onError();
      }
    );
  }

  validarAndSubmitCadastro() {
    if (this.formChamado.invalid || this.clienteIdExiste === false) {
      this.msgErrorCadastro = "Por favor, preencha todos os campos.";
    } else {
      this.onSubmit();
    }
  }

  onSubmit() {
    let dadosParaSalvar: FormChamado = {
      clienteId: "",
      nomeItem: "",
      itemSerie: "",
      status: "",
      dataEntrada: "",
      defeitoRelatado: "",
    };
    const dataInicial = this.formChamado.get("dataEntrada")?.value;
    const dataFormatada = this.datePipe.transform(
      dataInicial,
      "yyyy-MM-ddTHH:mm:ss"
    );
    if (this.novoClienteSalvoNoBanco) {
      const cliente = this.novoClienteSalvoNoBanco;

      dadosParaSalvar = {
        clienteId: { id: cliente.id },
        dataEntrada: dataFormatada,
        defeitoRelatado: this.formChamado.get("defeitoRelatado")?.value,
        itemSerie: this.formChamado.get("itemSerie")?.value,
        nomeItem: this.formChamado.get("nomeItem")?.value,
        status: "DISPONIVEL_TRIAGEM",
      };
    } else {
      const cliente = this.clienteRecebido;

      dadosParaSalvar = {
        clienteId: { id: cliente.id },
        dataEntrada: dataFormatada,
        defeitoRelatado: this.formChamado.get("defeitoRelatado")?.value,
        itemSerie: this.formChamado.get("itemSerie")?.value,
        nomeItem: this.formChamado.get("nomeItem")?.value,
        status: "DISPONIVEL_TRIAGEM",
      };
    }
    this.cadastroService.createCadastro(dadosParaSalvar).subscribe(
      (result) => {
        this.tabelaService.emitListaAtualizada.emit();
        this.onSucess();
        this.dialogRef.close(true);
      },
      () => {
        this.onError();
      }
    );
  }
  receberSon(clienteRecebido: FormCliente) {
    this.clienteRecebido = clienteRecebido;
    this.clienteIdExiste = true;
    this.formChamado.patchValue({
      clienteId: clienteRecebido.id,
      nomeItem: this.formChamado.get("nomeItem")?.value,
    });
  }
  onError() {
    this.snackBar.open("Ocorreu um erro", "", { duration: 5000 });
  }
  onSucess() {
    this.snackBar.open("Cadastrado com sucesso", "", { duration: 5000 });
  }
}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "../screens/cadastro/cadastro.component";
import { ListaComponent } from "../screens/cadastro/lista-cadastro/lista.component";
import { HomeComponent } from "../screens/home/home.component";
import { LoginComponent } from "../screens/login/login.component";
import { ManutencaoComponent } from "../screens/manutencao/manutencao.component";
import { TriagemComponent } from "../screens/triagem/triagem.component";

const routes: Routes = [
  { path: "lista", component: ListaComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "cadastrar", component: CadastroComponent },
  { path: "triagem", component: TriagemComponent },
  { path: "manutencao", component: ManutencaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRouteTesteRoutes {}

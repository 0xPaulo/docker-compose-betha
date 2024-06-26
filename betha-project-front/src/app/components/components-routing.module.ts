import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "../screens/cadastro/cadastro.component";
import { ConcluidoComponent } from "../screens/concluido/concluido.component";
import { HomeComponent } from "../screens/home/home.component";
import { LoginComponent } from "../screens/login/login.component";
import { ManutencaoComponent } from "../screens/manutencao/manutencao.component";
import { TecnicoComponent } from "../screens/tecnico-tela/tecnico.component";
import { TriagemComponent } from "../screens/triagem/triagem.component";
import { AuthGuard } from "../util/authGuard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "cadastrar", component: CadastroComponent, canActivate: [AuthGuard] },
  { path: "triagem", component: TriagemComponent, canActivate: [AuthGuard] },
  {
    path: "manutencao",
    component: ManutencaoComponent,
    canActivate: [AuthGuard],
  },
  { path: "chamado", component: TecnicoComponent, canActivate: [AuthGuard] },
  {
    path: "concluido",
    component: ConcluidoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRouteTesteRoutes {}

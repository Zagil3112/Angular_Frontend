import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/components/category/category.component';
import { CertAuthComponent } from '../certAuth/component/cert-auth/cert-auth.component';
import { UsuarioComponent } from '../usuario/component/usuario/usuario.component';
import { HomeComponent } from './components/home/home.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'ca', component: CertAuthComponent },
]


@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [],

})
export class RouterChildModule { }

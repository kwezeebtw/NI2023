import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path : '', redirectTo : 'public', pathMatch : 'full'},
    // { path : 'public', component: PublicComponent, loadChildren :()=> import ('./public/public.module').then((m)=>m.PublicModule)},
    // { path: '**', component: PageNotFoundComponent}
];


@NgModule({
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]
})
export class PublicRoutingModule{}
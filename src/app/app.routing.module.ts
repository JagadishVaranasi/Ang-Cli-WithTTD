import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from   './home/home.component';
import {GlossaryComponent} from   './glossary/glossary.component'


const appRoutes: Routes = [

 { path: '',
   component: HomeComponent ,
  
},
{ path: 'home', 
 
    component: HomeComponent 
},


{ path: 'glossary', 
 
    component: GlossaryComponent 
},
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes )],
  exports: [
    RouterModule
  ]
  
})
export class AppRoutingModule { }




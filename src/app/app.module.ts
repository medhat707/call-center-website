import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './components/features/features.component';


const routes : Routes= [
  {path: 'home' , component:HeaderComponent},
  { path: '' , redirectTo: '/home' , pathMatch:'full'},
  { path: '**' , redirectTo: '/home' , pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}

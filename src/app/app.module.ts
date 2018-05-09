import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashemetriceComponent } from './dashemetrice/dashemetrice.component';
import { DashreceptriceComponent } from './dashreceptrice/dashreceptrice.component';
import { DashbanquemeComponent } from './dashbanqueme/dashbanqueme.component';
import { DashbanquerecepComponent } from './dashbanquerecep/dashbanquerecep.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { DocumentComponent } from './document/document.component';
import { ChoixComponent } from './choix/choix.component';
import { InscripinstituComponent } from './inscripinstitu/inscripinstitu.component';
import { InscripbanqueComponent } from './inscripbanque/inscripbanque.component';
import { Base64UploadComponent } from './base64-upload/base64-upload.component';
import { DataDocServiceService } from './data-doc-service.service';
import { FileDropModule } from 'ngx-file-drop';
import { base64js } from '../../node_modules/base64-js'

import { EntrepriseServiceService } from './entreprise-service.service';
import { AaComponent } from './aa/aa.component';
import { Services } from '@angular/core/src/view/types';
import { NavbarComponent } from './navbar/navbar.component';
import { ImportFileComponent } from './import-file/import-file.component';
import { BanqueServiceService } from './banque-service.service';
import { InstituFinServiceService } from './institu-fin-service.service';
import { ImportComponent } from './import/import.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilbanqueComponent } from './profilbanque/profilbanque.component';
import { ProfilrecepComponent } from './profilrecep/profilrecep.component';
import { ImportService } from './import.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    DashemetriceComponent,
    DashreceptriceComponent,
    DashbanquemeComponent,
    DashbanquerecepComponent,
    DatagridComponent,
    CalendrierComponent,
    DocumentComponent,
    ChoixComponent,
    InscripinstituComponent,
    InscripbanqueComponent,
    Base64UploadComponent,
    AaComponent,
    NavbarComponent,
    ImportFileComponent,
    ImportComponent,
    ProfilComponent,
    ProfilbanqueComponent,
    ProfilrecepComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule, HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FileDropModule,
    
    RouterModule.forRoot(
      [
        {
          path: '',
          component: LoginComponent
        },

        {
          path: 'inscrip',
          component: ChoixComponent
        },

        {
          path: 'dashbored',
          component: DashemetriceComponent
        },
        {
          path: 'dashbored1',
          component: DashreceptriceComponent
        },
        {
          path: 'document',
          component: DocumentComponent
        },
        {
          path: 'institu',
          component: InscripinstituComponent
        },
        {
          path: 'entreprise',
          component: InscriptionComponent
        },
        {
          path: 'banque',
          component: InscripbanqueComponent
        },
        {
          path: 'bq',
          component: DashemetriceComponent
        },
        {
          path:'import',
          component: ImportComponent
        },

        { path :'profil',
        component:ProfilrecepComponent
        },
        { path :'profilentreprise',
        component:ProfilComponent
        },
        { path :'profilbanque',
        component:ProfilbanqueComponent
        },
        { path :'profilbanque2',
        component:ProfilbanqueComponent
        },
        { path :'dash',
        component:DashbanquerecepComponent
        },
        { path :'dash1',
        component:DashbanquemeComponent
        },
        { path : 'aa',
      component:AaComponent},
      { path : 'base64',
    component:Base64UploadComponent}


      ]),

  ],
  providers: [
    DataDocServiceService,
    EntrepriseServiceService,
    BanqueServiceService,
    InstituFinServiceService,
    ImportService,
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

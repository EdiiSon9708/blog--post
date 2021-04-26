import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';

//Rutas
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ModalAutorComponent } from './components/modal/modal-autor/modal-autor.component';
import { ModalPostComponent } from './components/modal/modal-post/modal-post.component';
import { DetailsComponent } from './components/details/details.component';
import { ModalEditComponent } from './components/modal/modal-edit/modal-edit.component';
import { ReactiveFormsModule   } from '@angular/forms';

import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditsComponent } from './components/edits/edits.component';




import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', component: InicioComponent , pathMatch:'full'},
  { path: 'administrador', component: AdministradorComponent },
  { path: 'detalles', component: DetailsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    AdministradorComponent,
    ModalAutorComponent,
    ModalPostComponent,
    DetailsComponent,
    ModalEditComponent,
    EditsComponent,
  ],
  imports: [
    NgbModule,

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    //material angular
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,

    //Rutas
    [RouterModule.forRoot(routes),

  ]

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

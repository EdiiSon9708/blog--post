

import { ModalEditComponent } from './../modal/modal-edit/modal-edit.component';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


//Importar componentes del modal
import { ModalAutorComponent } from '../modal/modal-autor/modal-autor.component';
import { ModalPostComponent } from '../modal/modal-post/modal-post.component';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})

export class AdministradorComponent implements OnInit {

  //crear propiedad state para pasar los datos
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  NavigationExtras: any = this.navigationExtras
  

  constructor(public dialog: MatDialog, private router : Router,
    
    ) { } //



  ngOnInit(): void {

 
  }
  

  openDialogA() {
    const dialogRef = this.dialog.open(ModalAutorComponent);

  }

  openDialogP() {
    const dialogRef = this.dialog.open(ModalPostComponent);
  }

  openDialogE() {
    const dialogRef = this.dialog.open(ModalEditComponent); 

    
  }



  

  onView(item:any): void {
    this.NavigationExtras.state.value= item;
    this.router.navigate(['detalles'], this.NavigationExtras)
  }

  onDel(item:any): void {
    alert ('Post eliminado')
  }


}

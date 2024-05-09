import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from 'src/app/modules/shared/services/usuario.service';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
   


  constructor(private usuarioService: UsuarioService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  displayedColumns: string[] = ['id', 'certificateUser', 'permission', 'days','actions'];
  dataSource = new MatTableDataSource<UsuarioElement>();

  getUsuarios(){
    let Data;

    this.usuarioService.getUsuarios()
        .subscribe( (data:any) => {

          console.log("respuesta usuarios: ", data);

          Data = data;   
          console.log("respuesta afuera 2: ",Data);       


          this.processUsersResponse(data);

        }, (error: any) => {
          console.log("error: ", error);
        })

        console.log("respuesta afuera 1: ",Data);

  }

  processUsersResponse(resp: any){

    const dataUsuario: UsuarioElement[] = [];

      //let listCategory = resp.categoryResponse.category;
      let listUsuario = resp.content;

      listUsuario.forEach((element: UsuarioElement) => {
        dataUsuario.push(element);
      });

      this.dataSource = new MatTableDataSource<UsuarioElement>(dataUsuario);
      
    

  }
  openUserDialog(){
    const dialogRef = this.dialog.open(NewUserComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
      if( result == 1){
        this.openSnackBar("Usuario Agregado", "Exitosa");
        this.getUsuarios();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar usuario", "Error");
      }
        
    });

  }
  openSnackBar(message: string, action : string) :  MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action,{
      duration: 2000
    })
  }

}

export interface UsuarioElement{
 
  id: number;
  certificateUser: string,
  permission: boolean,
  days: number

}

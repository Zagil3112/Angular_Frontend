import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CertAuthService } from 'src/app/modules/shared/services/cert-auth.service';
import { NewCertAuthComponent } from '../new-cert-auth/new-cert-auth.component';

@Component({
  selector: 'app-cert-auth',
  templateUrl: './cert-auth.component.html',
  styleUrls: ['./cert-auth.component.css']
})
export class CertAuthComponent implements OnInit {

  constructor(private caService: CertAuthService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCas();
  }

  displayedColumns: string[] = ['id', 'caName','actions'];
  dataSource = new MatTableDataSource<CaElement>();

  getCas(){

    this.caService.getCas()
        .subscribe( (data:any) => {

          console.log("respuesta cas: ", data);
          this.processCaResponse(data);

        }, (error: any) => {
          console.log("error: ", error);
        })
  }

  processCaResponse(resp: any){

    const dataCategory: CaElement[] = [];

      //let listCategory = resp.categoryResponse.category;
      let listCategory = resp.content;

      listCategory.forEach((element: CaElement) => {
        dataCategory.push(element);
      });

      this.dataSource = new MatTableDataSource<CaElement>(dataCategory);
      
    

  }

  openCaDialog(){
    const dialogRef = this.dialog.open(NewCertAuthComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
      if( result == 1){
        this.openSnackBar("CA creada", "Exitosa");
        this.getCas();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al crear la ca", "Error");
      }
        
    });

  }
  openSnackBar(message: string, action : string) :  MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action,{
      duration: 2000
    })
  }

}


export interface CaElement{
 
  id: number;
  caName: string;
  
}
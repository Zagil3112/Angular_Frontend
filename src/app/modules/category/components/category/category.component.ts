import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';
import { NewCategoryComponent } from '../new-category/new-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCategories();
  }

  displayedColumns: string[] = ['id', 'usuario', 'fechaCreacion', 'fechaExpiracion','validez','actions'];
  dataSource = new MatTableDataSource<CategoryElement>();

  getCategories(){

    this.categoryService.getCategories()
        .subscribe( (data:any) => {

          console.log("respuesta categories: ", data);
          this.processCategoriesResponse(data);

        }, (error: any) => {
          console.log("error: ", error);
        })
  }

  processCategoriesResponse(resp: any){

    const dataCategory: CategoryElement[] = [];

      //let listCategory = resp.categoryResponse.category;
      let listCategory = resp.content;

      listCategory.forEach((element: CategoryElement) => {
        dataCategory.push(element);
      });

      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
      
    

  }

  openCategoryDialog(){
    const dialogRef = this.dialog.open(NewCategoryComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      
      if( result == 1){
        this.openSnackBar("Certificado creado", "Exitosa");
        this.getCategories();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al crear el certificado", "Error");
      }
        
    });

  }
  openSnackBar(message: string, action : string) :  MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action,{
      duration: 2000
    })
  }

}



export interface CategoryElement{
 
  id: number;
  usuario: string;
  fechaCreacion: string;
  fechaExpiracion : string;
  validez : boolean;
}
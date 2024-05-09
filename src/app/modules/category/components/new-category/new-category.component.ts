import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  public categoryForm : FormGroup;
  estadoFormulario: string = "";

  constructor(private fb: FormBuilder, private categoryService : CategoryService,
            private dialogRef : MatDialogRef<NewCategoryComponent>) { 
    this.categoryForm = this.fb.group({
      
      user: ['', Validators.required],
      ou: ['CETAD', Validators.required],
      o: ['FAC', Validators.required],
      st: ['ANTIOQUIA', Validators.required],
      l: ['RIONEGRO', Validators.required],
      c: ['CO', Validators.required],
      caName: ['ca1', Validators.required],
      pass: ['123456', Validators.required],
      url: ['geoserver', Validators.required],    

    })
  }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      user: this.categoryForm.get('user')?.value,
      ou: this.categoryForm.get('ou')?.value,
      o: this.categoryForm.get('o')?.value,
      l: this.categoryForm.get('l')?.value,
      st: this.categoryForm.get('st')?.value,
      c: this.categoryForm.get('c')?.value,
      caName: this.categoryForm.get('caName')?.value,
      pass: this.categoryForm.get('pass')?.value,
      url: this.categoryForm.get('url')?.value,     


    }

      this.categoryService.saveCategorie(data)
          .subscribe( (data : any) => {
            console.log(data);
            this.dialogRef.close(1);
          }, (error: any) => {
            this.dialogRef.close(2);
          })
    }
  

  
  

  onCancel(){
    this.dialogRef.close(3);
  }

}

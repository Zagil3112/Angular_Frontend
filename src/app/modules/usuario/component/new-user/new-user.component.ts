import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/modules/shared/services/usuario.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public userForm : FormGroup;
  estadoFormulario: string = "";

  constructor(private fb: FormBuilder, private usuarioService : UsuarioService,
    private dialogRef : MatDialogRef<NewUserComponent>) { 
      this.userForm = this.fb.group({
      
        certificateUser: ['', Validators.required],
        permission: ['true', Validators.required],
        days: ['365', Validators.required],
  
      })
    }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      certificateUser: this.userForm.get('certificateUser')?.value,
      permission: this.userForm.get('permission')?.value,
      days: this.userForm.get('days')?.value,
      
        


    }

      this.usuarioService.saveUsuario(data)
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

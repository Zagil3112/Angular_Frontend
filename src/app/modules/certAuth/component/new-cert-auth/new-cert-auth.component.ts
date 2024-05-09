import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CertAuthService } from 'src/app/modules/shared/services/cert-auth.service';

@Component({
  selector: 'app-new-cert-auth',
  templateUrl: './new-cert-auth.component.html',
  styleUrls: ['./new-cert-auth.component.css']
})
export class NewCertAuthComponent implements OnInit {

  public caForm : FormGroup;
  estadoFormulario: string = "";

  constructor(private fb: FormBuilder, private caService : CertAuthService,
    private dialogRef : MatDialogRef<NewCertAuthComponent>) {

      this.caForm = this.fb.group({
      
        caName: ['', Validators.required],
        cn: ['C3E', Validators.required],
        ou: ['CETAD', Validators.required],
        o: ['FAC', Validators.required],
        l: ['RIONEGRO', Validators.required],
        st: ['ANT', Validators.required],
        c: ['CO', Validators.required],
        year:['365', Validators.required],
        pass: ['123456', Validators.required],    
               
      })
     }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      caName: this.caForm.get('caName')?.value,
      cn: this.caForm.get('cn')?.value,
      ou: this.caForm.get('ou')?.value,
      o: this.caForm.get('o')?.value,
      l: this.caForm.get('l')?.value,
      st: this.caForm.get('st')?.value,
      c: this.caForm.get('c')?.value,
      year: this.caForm.get('year')?.value,
      pass: this.caForm.get('pass')?.value,        
  
    }

      this.caService.saveCa(data)
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

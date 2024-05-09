import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const pki_get = environment.ca_pki_get;
const pki_post = environment.ca_pki_post;

@Injectable({
  providedIn: 'root'
})
export class CertAuthService {

  constructor(private http: HttpClient) { }

  getCas(){
    // alt +96 : backtick ``
  
    return this.http.get(pki_get);

  }

  /**
   * Save categories
   */

  saveCa(body: any) {
    
    return this.http.post(pki_post, body);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const pki_get = environment.usuario_pki_get;
const pki_post = environment.usuario_pki_post;
const pki_token = environment.user_token;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

    getUsuarios(){
    // alt +96 : backtick ``
   
    return this.http.get(pki_get);

  }

  /**
   * Save categories
   */

  saveUsuario(body: any) {
    
    return this.http.post(pki_post, body);
  }

  getToken(usuario:string){
    const endpoint = `${pki_token}/${usuario}`;
    return this.http.get(endpoint);

  }
}

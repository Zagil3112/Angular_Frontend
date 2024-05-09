import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
const pki_get = environment.category_pki_get;
const pki_post = environment.category_pki_post;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  

  getCategories(){
    // alt +96 : backtick ``
    const endpoint = `${base_url}/categories`;
    const pki_endpoint = pki_get;
    //return this.http.get(endpoint);
    return this.http.get(pki_endpoint);

  }

  /**
   * Save categories
   */

  saveCategorie(body: any) {
    
    return this.http.post(pki_post, body);
  }

}

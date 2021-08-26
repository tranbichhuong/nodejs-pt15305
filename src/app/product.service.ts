import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(
  private http : HttpClient
) {}
API_URL ="https://610c995366dd8f0017b76dd2.mockapi.io/product"
getAllproduct(){

}
}

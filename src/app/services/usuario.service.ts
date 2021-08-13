import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = '7c7e5d330a7803c1c81fdd903da497d47172e838c564013152d2d341e92342fa';
  constructor(private http: HttpClient) { 
  }

  getUsuarios():Observable<any>{
    return this.http.get<any>(this.url+'?access-token='+this.token)
  }

  getUsuario(id: any):Observable<any>{
    return this.http.get<any>(this.url+'/'+id+'?access-token='+this.token)
  }
}
// 
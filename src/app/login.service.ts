import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl:any = environment.apiUrl;
  constructor(private apiService:ApiService) { }

  getUserData():Observable<login>{
    let notocUrl = this.baseUrl+"/1";
    return this.apiService.get(notocUrl).pipe(
      map(data => data));
  }

}

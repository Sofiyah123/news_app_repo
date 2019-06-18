import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
const API_URL=environment.apiurl;
const API_KEY=environment.apikey;
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  currentArticle:any;

  constructor(private http:HttpClient,private router:Router,private newsService:NewsServiceService) { }
  
  getData(url){
    return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`);
  }

}

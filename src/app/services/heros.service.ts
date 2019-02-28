import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Md5 } from "ts-md5";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerosService {
  private publickey:string;
  private privatekey:string;
  public url:string;
  private ts:any;
  private hash:any;
  public name:string;
  public dat:any;

  constructor(private _http:HttpClient,private md5:Md5) {
    this.publickey = '53a39bbd9fbc4ae60bfde2ed339e799c';
    this.privatekey = '8b8a0b595dcad7856d79203179cd6a71c8c7c9b2';
    this.ts = Date.now();
    this.hash = this.md5.appendStr(this.ts+this.privatekey+this.publickey).end();
  }

  getHeros():Observable<any>{


    this.url = `http://gateway.marvel.com/v1/public/characters?ts=${this.ts}&apikey=${this.publickey}&hash=${this.hash}`;
    let headers = new HttpHeaders().set("Content-Type","application/json");

    return this._http.get(this.url,{headers:headers});

  }
  buscarHero(name):Observable<any>{

    this.name=encodeURIComponent(name);
    this.url = `http://gateway.marvel.com/v1/public/characters?name=${this.name}&ts=${this.ts}&apikey=${this.publickey}&hash=${this.hash}`;
    let headers = new HttpHeaders().set("Content-Type","application/json");

    return this._http.get(this.url,{headers:headers});
  }

}

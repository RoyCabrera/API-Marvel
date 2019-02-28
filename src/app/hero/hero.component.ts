import { Component, OnInit } from '@angular/core';
import { HerosService } from "../services/heros.service";
import { Hero } from "../models/hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public buscarhero:string;
  public heros:Hero[];

  constructor(private __heroService:HerosService) {
    this.buscarhero = "";
   }

  ngOnInit() {
    this.getAllHeros();
  }

  getAllHeros(){
      this.__heroService.getHeros().subscribe(
      response => {

        this.heros = response.data.results;
        console.log(this.heros);
      },
      error=>{
        console.log(<any>error)
      }
    )

  }
  buscar(){
    this.__heroService.buscarHero(this.buscarhero).subscribe(
      response =>{
        this.heros = response.data.results;
        console.log(this.heros);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

}

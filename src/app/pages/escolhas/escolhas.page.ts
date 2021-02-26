import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolhas',
  templateUrl: './escolhas.page.html',
  styleUrls: ['./escolhas.page.scss'],
})
export class EscolhasPage implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }
  navegarorigemdestino(origem: any, destino: any) {
    console.log('Estou navegando para =>', origem);
    this.navegar(destino)
  }
  
  navegar(destino: any){
    console.log('Estou navegando para =>', destino);
    this.router.navigate([destino])
  }

}

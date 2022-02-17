import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pesquisa: string ="";
  constructor(private router: Router,private service: UsuarioService) { }

  ngOnInit(): void {
  }

  Pesquisar(){
    console.log(this.pesquisa)
    this.service.setNome(this.pesquisa)
    this.router.navigateByUrl('pesquisa')
  }

}

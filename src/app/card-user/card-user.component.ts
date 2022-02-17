import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  usuarios : any[] =[];
  constructor(private service: UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.service.listagem().subscribe((data: any[])=>{
      console.log(data)
      this.usuarios = data
    })
  }
  definindoUsuario(usuario:any){
    this.service.usuariosEscolhido(usuario);
    this.router.navigateByUrl('usuario')

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  usuario: any;
  constructor(private service: UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.usuario =this.service.getUsuarioEscolhido()
  }
  seguidores(){
    this.router.navigateByUrl('seguidores')
  }
  seguindo(){
    this.router.navigateByUrl('seguidores')
  }
  tweets(){}


}

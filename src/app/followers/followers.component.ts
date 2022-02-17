import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  seguidores: any[] = []
  constructor(private service: UsuarioService,private router: Router) { }

  ngOnInit(): void {
    this.service.listagemSeguidores().subscribe((data)=>{
      this.seguidores = data;
      console.log(this.seguidores)
    })
  }

}

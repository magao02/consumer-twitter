import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
/*
o twitter me bloqueou então eu peguei alguns dados e fiz um json-server por favor rode o json-server para que funcione
 */
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private listaUsuarios: any[];
  private usuarioEscolhido: any;
  private url = 'http://localhost:3000/';
  private nome: string =''
  //private token = 'Aqui token autorização do twitter'
  //private twitterUrl ='https://api.twitter.com/2/users/by/username/lucas?tweet.fields=id,public_metrics&user.fields=name,username,profile_image_url,description,public_metrics'

  constructor(private httpClient: HttpClient) {
  this.listaUsuarios =[]
 }
 listagem(){
   console.log(this.nome)
  return this.httpClient.get<any[]>(`${this.url}${this.nome}`)
  }
  usuariosEscolhido(usuario:any){
  this.usuarioEscolhido = usuario
  }
  setNome(nome: string){
    this.nome = nome
  }
  getUsuarioEscolhido(){
    return this.usuarioEscolhido;
  }
  listagemSeguidores(){
    return this.httpClient.get<any[]>(`${this.url}${this.usuarioEscolhido?.id}`)
  }

}

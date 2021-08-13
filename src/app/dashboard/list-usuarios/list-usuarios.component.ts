import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  listUsuarios: any[] =[];
  loading = true;
  constructor(private _servicioUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this._servicioUsuario.getUsuarios().subscribe(data => {
      // console.log(data);
      // console.log(data.data)
      this.listUsuarios = data.data;
      this.loading = false;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  loading = true;
  id: any;
  name: string = "";
  gender: string = "";
  email: string = "";
  status: string = "";
  constructor(private _aroute: ActivatedRoute, 
              private _servicioUsuario: UsuarioService) { 

    this.id = this._aroute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.id);
    this.getUsuario();
  }

  getUsuario(): void{
    this._servicioUsuario.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.id = data.data.id;      
      this.name = data.data.name;
      this.gender = data.data.gender;
      this.email = data.data.email;
      this.status = data.data.status;
      this.loading = false;
    });
  }
}

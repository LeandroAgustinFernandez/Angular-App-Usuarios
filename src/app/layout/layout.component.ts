import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  irDashboard(){
    // guardamos los datos en un formulario o hacemos alguna logica
    // redireccionamos
    this.router.navigate(['/dashboard'])
  }
}

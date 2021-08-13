import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  // imgURL: string;
  firstName: string = "" ;
  email: string = "" ;
  id: number = 0;

  constructor() {
    
   }

  ngOnInit(): void {
     console.log(this.user)
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }

}

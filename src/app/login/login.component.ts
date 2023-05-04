import { Component } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData = {
    username: '',
    password: ''
  };

  constructor(private dbService: DbService) { }

  login() {
    this.dbService.getData().subscribe((data: any) => {
      const validUser = data.find((user: any) => user.username === this.userData.username && user.password === this.userData.password);
      if (validUser) {
        // Inicia sesión en la aplicación
      } else {
        // Muestra un mensaje de error al usuario
      }
    });
  }

}

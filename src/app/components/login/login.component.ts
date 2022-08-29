import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  spin = false;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        console.log('empieza el next');
        this.isLogged = true;
        console.log('verifica que el logged es falso');
        this.isLogginFail = false;
        console.log('verifica que el logged no fallo');
        this.tokenService.setToken(data.token);
        console.log('set token');
        this.tokenService.setUserName(data.nombreUsuario);
        console.log('set user');
        this.tokenService.setAuthorities(data.authorities);
        console.log('set auth');
        this.roles = data.authorities;
        console.log('termina');
        setTimeout(this.funcionRecargar,1500);

      }, err =>{
        this.isLogged = false;
        console.log('estaba logueado');
        this.isLogginFail = true;
        console.log('hubo error de log');
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        console.log('hubo un error');
        alert('Usuario y/o pass incorrectos')
        this.spin = false;
      })

  }

  funcionRecargar(){
    location.reload()
  }

  spinner(){
    this.spin = true;
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}

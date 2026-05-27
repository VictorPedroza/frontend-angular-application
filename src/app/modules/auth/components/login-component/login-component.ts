import { Component } from '@angular/core';
import { LoginRequestDTO } from '../../dtos/LoginDTOs';
import { AuthService } from '../../services/auth-service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private service: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  login(): void {
    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log("Login realizado", response);

        if (response.token) {
          localStorage.setItem("token", response.token);
        }
      }
    })
  }
}

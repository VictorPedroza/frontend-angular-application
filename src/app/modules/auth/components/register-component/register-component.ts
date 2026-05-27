import { Component } from '@angular/core';
import { RegisterRequestDTO } from '../../dtos/RegisterDTOs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register-component',
  standalone: false,
  templateUrl: './register-component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private service: AuthService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  register(): void {
    this.service.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log("Usuario criado", response);

        if (response.token) {
          localStorage.setItem("token", response.token);
        }
      }
    })
  }
}

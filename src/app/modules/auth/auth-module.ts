import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth-service';
import { LoginComponent } from './components/login-component/login-component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register-component/register-component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
  exports: [LoginComponent],
})
export class AuthModule {}

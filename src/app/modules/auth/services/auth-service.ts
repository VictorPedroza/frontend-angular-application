import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequestDTO, RegisterResponseDTO } from '../dtos/RegisterDTOs';
import { LoginRequestDTO, LoginResponseDTO } from '../dtos/LoginDTOs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) {}

  register(credentials: RegisterRequestDTO): Observable<RegisterResponseDTO> {
    return this.http.post<RegisterResponseDTO>(`${this.apiUrl}/register`, credentials);
  }

  login(credentials: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.apiUrl}/login`, credentials);
  }
}

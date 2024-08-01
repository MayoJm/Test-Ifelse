// src/app/services/circular-prime.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class PrimosCicularesServicio {
    private apiUrl = 'https://repo.ifelse.com.ar:7003/api';

    constructor(private http: HttpClient) { }

    enviarPrimosCirculares(primosCirculares: number[]): Observable<any> {
        const body = {
            titulo: 'PRIMOS CIRCULARES',
            introduccion: 'los primos circulares',
            desarrollo: primosCirculares.join(', '),
            fecha: new Date().toISOString().split('T')[0]
        };
        return this.http.post(`${this.apiUrl}/blogs/primos`, body, {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        });
    }

    obtenerPrimosPorID(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/blogs/primos/ID/${id}`);
      }
      
}

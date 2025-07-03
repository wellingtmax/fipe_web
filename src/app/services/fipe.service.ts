import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FipeTabela {
  codigo: number;
  mes: string;
}

export interface FipeMarca {
  codigo: string;
  nome: string;
}

export interface FipeVeiculo {
  codigo: string;
  nome: string;
}

export interface FipePreco {
  valor: string;
  marca: string;
  modelo: string;
  anoModelo: number;
  combustivel: string;
  codigoFipe: string;
  mesReferencia: string;
  siglaCombustivel: string;
}

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private readonly apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Buscar tabelas de referência
  getTabelas(): Observable<FipeTabela[]> {
    return this.http.get<FipeTabela[]>(`${this.apiUrl}/fipe/tabelas`);
  }

  // Buscar marcas por tipo de veículo
  getMarcas(tipo: 'carros' | 'motos' | 'caminhoes'): Observable<FipeMarca[]> {
    return this.http.get<FipeMarca[]>(`${this.apiUrl}/fipe/marcas/${tipo}`);
  }

  // Buscar veículos por marca
  getVeiculos(tipo: 'carros' | 'motos' | 'caminhoes', marca: string): Observable<FipeVeiculo[]> {
    return this.http.get<FipeVeiculo[]>(`${this.apiUrl}/fipe/veiculos/${tipo}/${marca}`);
  }

  // Buscar preço por código FIPE
  getPreco(codigoFipe: string): Observable<FipePreco> {
    return this.http.get<FipePreco>(`${this.apiUrl}/fipe/preco/${codigoFipe}`);
  }

  // Buscar veículos
  buscarVeiculos(termo: string, tipo?: string): Observable<any> {
    const params = tipo ? `?termo=${termo}&tipo=${tipo}` : `?termo=${termo}`;
    return this.http.get(`${this.apiUrl}/fipe/buscar${params}`);
  }

  // Health check da API
  healthCheck(): Observable<any> {
    return this.http.get(`http://localhost:3000/health`);
  }
}

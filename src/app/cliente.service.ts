import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { CLIENTES } from './mock-clientes';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    const clientes = of(CLIENTES);
    return clientes;
  }
}
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit{
  titulo = "Clientes DAW 2"

  selectedCliente?: Cliente;
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  onSelect(cliente: Cliente): void {
    this.selectedCliente = cliente;
  }

  getClientes(): void {
    this.clienteService.getClientes()
        .subscribe(clientes => this.clientes = clientes);
  }
}

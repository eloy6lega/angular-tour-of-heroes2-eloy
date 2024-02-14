import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, NgFor, NgIf],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent implements OnInit {
  
  titulo = "Alumnos DAW 2"

  selectedAlumno?: Alumno;
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  onSelect(alumno: Alumno): void {
    this.selectedAlumno = alumno;
  }

  getAlumnos(): void {
    this.alumnoService.getAlumnos()
        .subscribe(alumnos => this.alumnos = alumnos);
  }
} //cierra class  

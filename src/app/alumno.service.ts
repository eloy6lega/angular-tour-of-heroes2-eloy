import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Alumno } from './alumno';
import { ALUMNOS } from './mock-alumnos';

@Injectable({
  providedIn: 'root',
})


export class AlumnoService {

  constructor() { }

  getAlumnos(): Observable<Alumno[]> {
    const alumnos = of(ALUMNOS);
    return alumnos;
  }
}
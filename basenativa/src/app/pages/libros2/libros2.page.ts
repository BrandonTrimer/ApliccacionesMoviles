import { Component, OnInit } from '@angular/core';

import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService } from './../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libros2',
  templateUrl: './libros2.page.html',
  styleUrls: ['./libros2.page.scss'],
})
export class Libros2Page implements OnInit {
  autores: AutorInt[] = [];

  newNombreL:'';
  newGeneroL:'';
  newImgL:'';

  libroId;
  libroTitulo;
  libroAutorId;

  constructor(private activatedRoute: ActivatedRoute, private db:DatabaseService, private router:Router) { }

  ngOnInit() {
    this.libroId = this.activatedRoute.snapshot.paramMap.get('id');
    this.libroTitulo = this.activatedRoute.snapshot.paramMap.get('titulo');
    this.libroAutorId = this.activatedRoute.snapshot.paramMap.get('autorId');
  }

}

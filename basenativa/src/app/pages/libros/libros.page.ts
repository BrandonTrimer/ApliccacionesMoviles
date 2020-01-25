import { Component, OnInit } from '@angular/core';

import { DatabaseService } from './../../services/database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  newNombreA:'';
  newGeneroA:'';
  newImgA:'';

  autorId;
  autorNombre;
  autorGenero;
  autorImg;

  constructor(private activatedRoute: ActivatedRoute, private db:DatabaseService, private router:Router) { }

  ngOnInit() {
    this.autorId = this.activatedRoute.snapshot.paramMap.get('id');
    this.autorNombre = this.activatedRoute.snapshot.paramMap.get('nombre');
    this.autorGenero = this.activatedRoute.snapshot.paramMap.get('genero');
    this.autorImg = this.activatedRoute.snapshot.paramMap.get('img');
  }

 updateAutorP(){
    this.db.updateAutor(this.autorId, this.newNombreA, this.newGeneroA, this.newImgA)
    .then(_=> {
      this.router.navigate(['autores']);
    });
  }

  
}

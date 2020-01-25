import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';
import { AutorInt } from 'src/app/services/database.service';
import { DatabaseService } from './../../services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  
  autores: AutorInt[] = [];
  libros: Observable<any[]>;

  autor = {};
  libro = {};
  selectedView = 'autors'; 

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.db.getDatabaseStated().subscribe(rdy => {
      if (rdy){
        this.db.getAutores().subscribe(autors => {
          console.log('iniciando la bd ', autors)
          this.autores = autors;
        })
        this.libros = this.db.getLibros();
      }
    });
  }

  addAutorP(){
    this.db.addAutor(this.autor['nombre'], this.autor['genero'], this.autor['img'])
    .then(_=> {
      this.autor = {};
    });
  }

  deleteAutorP(id){
    this.db.deleteAutor(id)
    .then(_=> {
      console.log('lol',id)
    });
  }
  addLibroP(){
    this.db.addLibro(this.libro['titulo'], this.libro['autorId'])
    .then(_=> {
      this.libro ={};
      console.log('libro añadido')
    });
  }
  deleteLibroP(id){
    this.db.deleteLibro(id)
    .then(_=> {
      console.log('lol',id)
    });
  }

  updateAutorP(id,nombre,genero,img){
    this.router.navigate(['libros', id,nombre,genero,img]);
    console.log(id,nombre,genero,img);
  }
  updateLibroP(id,titulo,autorId){
    this.router.navigate(['libros2', id,titulo,autorId]);
    console.log(id,titulo,autorId);
  }

}

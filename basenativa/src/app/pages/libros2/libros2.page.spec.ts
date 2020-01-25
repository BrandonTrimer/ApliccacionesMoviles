import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Libros2Page } from './libros2.page';

describe('Libros2Page', () => {
  let component: Libros2Page;
  let fixture: ComponentFixture<Libros2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libros2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Libros2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

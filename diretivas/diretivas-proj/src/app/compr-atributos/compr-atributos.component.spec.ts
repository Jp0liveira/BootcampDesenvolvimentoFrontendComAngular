import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprAtributosComponent } from './compr-atributos.component';

describe('ComprAtributosComponent', () => {
  let component: ComprAtributosComponent;
  let fixture: ComponentFixture<ComprAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprAtributosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhotosPage } from './contact-photos.page';

describe('ContactPhotosPage', () => {
  let component: ContactPhotosPage;
  let fixture: ComponentFixture<ContactPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPhotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

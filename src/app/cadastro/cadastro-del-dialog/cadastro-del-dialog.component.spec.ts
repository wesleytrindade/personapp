import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDelDialogComponent } from './cadastro-del-dialog.component';

describe('CadastroDelDialogComponent', () => {
  let component: CadastroDelDialogComponent;
  let fixture: ComponentFixture<CadastroDelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAddDialogComponent } from './cadastro-add-dialog.component';

describe('CadastroAddDialogComponent', () => {
  let component: CadastroAddDialogComponent;
  let fixture: ComponentFixture<CadastroAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateLivre } from './update-livre';

describe('UpdateLivre', () => {
  let component: UpdateLivre;
  let fixture: ComponentFixture<UpdateLivre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLivre],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateLivre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

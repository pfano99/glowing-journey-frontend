import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentBoardComponent } from './investment-board.component';

describe('InvestmentBoardComponent', () => {
  let component: InvestmentBoardComponent;
  let fixture: ComponentFixture<InvestmentBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTypeCardComponent } from './game-type-card.component';

describe('GameTypeCardComponent', () => {
  let component: GameTypeCardComponent;
  let fixture: ComponentFixture<GameTypeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTypeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

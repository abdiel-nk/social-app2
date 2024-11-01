import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaElementComponent } from './socialmedia-element.component';

describe('SocialmediaElementComponent', () => {
  let component: SocialmediaElementComponent;
  let fixture: ComponentFixture<SocialmediaElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialmediaElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

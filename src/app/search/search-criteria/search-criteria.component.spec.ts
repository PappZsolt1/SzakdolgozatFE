import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCriteriaComponent } from './search-criteria.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchCriteriaComponent', () => {
  let component: SearchCriteriaComponent;
  let fixture: ComponentFixture<SearchCriteriaComponent>;

  let router = jasmine.createSpyObj("Router", ["navigate"]);
  let navigateSpy = router.navigate;
  let button;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ SearchCriteriaComponent ],
      providers: [{ provide: Router, useValue: router }],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    button = fixture.nativeElement.querySelector("button");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to actor-list', () => {
    component.selectedCategory = "Színész";
    button.click();
    expect(navigateSpy.calls.mostRecent().args[0]).toContain("search/actor-list");
  });

  it('should navigate to movie-list', () => {
    component.selectedCategory = "Film";
    button.click();
    expect(navigateSpy.calls.mostRecent().args[0]).toContain("search/movie-list");
  });

  it('should navigate to series-list', () => {
    component.selectedCategory = "Sorozat";
    button.click();
    expect(navigateSpy.calls.mostRecent().args[0]).toContain("search/series-list");
  });
});

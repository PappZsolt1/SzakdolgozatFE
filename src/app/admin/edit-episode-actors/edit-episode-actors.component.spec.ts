import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEpisodeActorsComponent } from './edit-episode-actors.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActorService } from '../../shared/services/actor.service';
import { EpisodeService } from '../../shared/services/episode.service';
import { Location } from '@angular/common';
import { of } from 'rxjs';
import { Actor } from '../../shared/models/actor.model';

describe('EditEpisodeActorsComponent', () => {
  let component: EditEpisodeActorsComponent;
  let fixture: ComponentFixture<EditEpisodeActorsComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let actorService = jasmine.createSpyObj("ActorService", ["checkIfExists"]);
  let checkIfExistsSpy = actorService.checkIfExists.and.returnValue(of(true));

  let episodeService = jasmine.createSpyObj("EpisodeService", ["checkIfExists", "removeActorFromEpisode"]);
  let checkIfExistsEpisodeSpy = episodeService.checkIfExists.and.returnValue(of(true));
  let removeActorFromEpisodeSpy = episodeService.removeActorFromEpisode.and.returnValue(of());

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditEpisodeActorsComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: ActorService, useValue: actorService },
        { provide: EpisodeService, useValue: episodeService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpisodeActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEpisodeActors on init if there is id', () => {
    expect(component.episodeId).toBe(1);
    expect(checkIfExistsEpisodeSpy).toHaveBeenCalled();
  });

  it('should button call getEpisodeActors', () => {
    spyOn(component, "getEpisodeActors");
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Epizód lekérése");
    button.click();
    expect(component.getEpisodeActors).toHaveBeenCalled();
  });

  it('should add actor', () => {
    spyOn(component, "addActorToEpisode");
    component.showActors = true;
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Hozzáadás");
    buttons[1].click();
    expect(component.addActorToEpisode).toHaveBeenCalled();
  });
  
  it('should show modal', () => {
    let a: Actor = { id: null, name: null, imageUrl: null, birthDate: null, birthPlace: null, bio: null, gender: null, comments: null, movies: null, episodes: null };
    component.actors = [];
    component.actors.push(a);
    component.showActors = true;
    fixture.detectChanges();
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[1].textContent).toBe("Törlés");
    buttons[1].click();
    expect(showSpy).toHaveBeenCalled();
  });

  it('should Vissza button call location.back', () => {
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[buttons.length - 1].textContent).toBe("Vissza");
    buttons[buttons.length - 1].click();
    expect(backSpy).toHaveBeenCalled();
  });
});

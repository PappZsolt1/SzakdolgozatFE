import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEpisodeComponent } from './edit-episode.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';
import { EpisodeService } from '../../shared/services/episode.service';
import { SeasonService } from '../../shared/services/season.service';
import { of } from 'rxjs';

describe('EditEpisodeComponent', () => {
  let component: EditEpisodeComponent;
  let fixture: ComponentFixture<EditEpisodeComponent>;

  let modalService = jasmine.createSpyObj("BsModalService", ["show"]);
  let showSpy = modalService.show;

  let location = jasmine.createSpyObj("Location", ["back"]);
  let backSpy = location.back;

  let episodeService = jasmine.createSpyObj("EpisodeService",
  ["getEpisode", "getEpisodeSeasonId", "addEpisode", "modifyEpisode", "canBeDeleted", "deleteEpisode"]);
  let getEpisodeSpy = episodeService.getEpisode.and.returnValue(of());
  let getEpisodeSeasonIdSpy = episodeService.getEpisodeSeasonId.and.returnValue(of());
  let addEpisodeSpy = episodeService.addEpisode.and.returnValue(of());
  let modifyEpisodeSpy = episodeService.modifyEpisode.and.returnValue(of());
  let canBeDeletedSpy = episodeService.canBeDeleted.and.returnValue(of());
  let deleteEpisodeSpy = episodeService.deleteEpisode.and.returnValue(of());

  let seasonService = jasmine.createSpyObj("SeasonService", ["checkIfExists"]);
  let checkIfExistsSpy = seasonService.checkIfExists.and.returnValue(of(true));
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditEpisodeComponent ],
      providers: [
        { provide: Location, useValue: location },
        { provide: EpisodeService, useValue: episodeService },
        { provide: SeasonService, useValue: seasonService },
        { provide: BsModalService, useValue: modalService },
        { provide: ActivatedRoute, useValue:{snapshot:{paramMap:convertToParamMap({id:'1'})}}}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getEpisode if there is id on init', () => {
    expect(getEpisodeSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is true, buttons call methods', () => {
    component.modify = true;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Epizód módosítása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Módosítás");
    buttons[0].click();
    expect(checkIfExistsSpy).toHaveBeenCalled();
    expect(buttons[1].textContent).toBe("Törlés");
    buttons[1].click();
    expect(canBeDeletedSpy).toHaveBeenCalled();
    expect(buttons[2].textContent).toBe("Vissza");
    buttons[2].click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should show correct h2 and buttons if modify is false, buttons call methods', () => {
    component.modify = false;
    fixture.detectChanges();
    let h2 = fixture.nativeElement.querySelector("h2");
    expect(h2.textContent).toBe("Epizód létrehozása");
    let buttons = fixture.nativeElement.querySelectorAll("button");
    expect(buttons[0].textContent).toBe("Mentés");
    buttons[0].click();
    expect(checkIfExistsSpy).toHaveBeenCalled();
    expect(buttons[1].textContent).toBe("Vissza");
    buttons[1].click();
    expect(backSpy).toHaveBeenCalled();
  });

  it('should delete hide form', () => {
    component.deleted = true;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
  });

  it('should save hide form', () => {
    component.saved = true;
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector("button");
    expect(button.textContent).toBe("Vissza");
  });
});

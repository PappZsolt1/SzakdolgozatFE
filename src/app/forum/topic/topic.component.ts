import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { TopicService } from '../shared/topic.service';
import { Topic } from '../shared/topic.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  type = "topic";
  deleted = false;
  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private topicService: TopicService,
    private location: Location
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.topicService.getTopic(id).subscribe(r => this.topic = r);
  }

  deleteTopic(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.topicService.deleteTopic(this.topic.id).subscribe(() => this.deleted = true);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    this.location.back();
  }
}

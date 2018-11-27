import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ArticleService } from '../shared/article.service';
import { Article } from '../shared/article.model';
import * as globals from '../../shared/globals';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article = { id: null, title: null, content: null, saved: null, published: null, publishDate: null, username: null, comments: null };

  saved = false;
  published = false;
  deleted = false;
  modify = false;
  modalRef: BsModalRef;

  inputTextMessage = globals.inputTextMessage;
  textareaMessage = globals.textareaMessage;

  constructor(
    private modalService: BsModalService,
    private articleService: ArticleService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    if (id) {
      this.articleService.getArticle(id).subscribe(r => { this.article = r; this.modify = true; });
    }
  }

  saveArticle(): void {
    this.articleService.saveArticle(this.article).subscribe(() => this.saved = true);
  }

  publishArticle(): void {
    this.articleService.publishArticle(this.article).subscribe(() => this.published = true);
  }

  deleteArticle(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.articleService.deleteArticle(this.article.id).subscribe(() => this.deleted = true);
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  goBack() {
    this.location.back();
  }
}

import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { LogstoreService } from './logstore.service';
import { ILogstore, Logstore } from './../utils/models/logstore.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'logstore-update',
  templateUrl: './logstore-update.component.html',
})
export class LogstoreUpdateComponent implements OnInit {
  log: ILogstore = new Logstore();
  isSaving = false;

  constructor(
    protected logstoreService: LogstoreService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.status();
  }

  save(): void {
    this.isSaving = true;

    this.subscribeToSaveResponse(this.logstoreService.create(this.log));
  }

  protected subscribeToSaveResponse(
    result: Observable<HttpResponse<ILogstore>>
  ): void {
    result.subscribe(
      (res: HttpResponse<ILogstore>) => this.onSaveSuccess(res.body!),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(result: ILogstore): void {
    this.isSaving = false;
    this.activeModal.dismiss(result);
    window.location.reload();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  clear(): void {
    this.activeModal.dismiss('cancel');
  }

  status(): void {
    if (this.log?.id == null) {
      this.isSaving = false;
    }
  }
}

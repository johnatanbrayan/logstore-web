import { LogstoreUpdateComponent } from './logstore-update.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ILogstore } from './../utils/models/logstore.model';
import { HttpResponse } from '@angular/common/http';
import { LogstoreService } from './logstore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'logstore',
  templateUrl: './logstore.component.html',
})
export class LogstoreComponent implements OnInit {
  logstoreList?: ILogstore[];

  page = 1;
  pageSize = 10;
  items = [];

  constructor(
    protected logstoreService: LogstoreService,
    protected modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadLogstore();
  }

  loadLogstore(): void {
    this.logstoreService
      .query()
      .subscribe(
        (res: HttpResponse<ILogstore[]>) =>
          (this.logstoreList = res.body.filter((l) => l.occurrences))
      );
  }

  create(): void {
    const modalRef = this.modalService.open(LogstoreUpdateComponent, {
      size: 'lg',
      backdrop: 'static',
    });
  }
}

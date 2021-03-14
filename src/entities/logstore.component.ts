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

  constructor(protected logstoreService: LogstoreService) {}

  ngOnInit(): void {
    this.logstoreService
      .query()
      .subscribe(
        (res: HttpResponse<ILogstore[]>) => (this.logstoreList = res.body)
      );
  }
}

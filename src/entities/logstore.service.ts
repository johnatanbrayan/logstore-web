import { ILogstore } from './../utils/models/logstore.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LogstoreService {
  public resourceUrl = '/logstore-0.0.1-SNAPSHOT/log';

  constructor(protected http: HttpClient) {}

  query(req?: any): Observable<HttpResponse<ILogstore[]>> {
    return this.http.get<ILogstore[]>(this.resourceUrl, {
      observe: 'response',
    });
  }
}

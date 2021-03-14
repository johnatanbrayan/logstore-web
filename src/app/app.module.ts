import { fontAwesomeIcons } from './../utils/icons/font-awesome-icons';
import { LogstoreUpdateComponent } from './../entities/logstore-update.component';
import { HttpClientModule } from '@angular/common/http';
import { LogstoreComponent } from './../entities/logstore.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, LogstoreComponent, LogstoreUpdateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
  ],
  entryComponents: [LogstoreUpdateComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}

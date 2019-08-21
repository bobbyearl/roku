import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RokuService } from './services/roku.service';
import { RemoteComponent } from './remote/remote.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    RokuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

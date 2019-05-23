import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AlertBoxComponent } from './alertbox/alertbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertBoxService } from './services/alertbox.service';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertBoxComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AlertBoxService],
  entryComponents: [AppComponent, AlertBoxComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    // Create a custom element and register it with the DOM
    const el = createCustomElement(AlertBoxComponent, {injector});
    customElements.define('alert-box', el);
  }
  ngDoBootstrap() {

  }
}

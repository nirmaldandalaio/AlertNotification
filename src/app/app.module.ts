import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AlertBoxComponent } from './alertbox/alertbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent, AlertBoxComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AlertBoxComponent, {injector});
    customElements.define('alert-box', el);
  }
  ngDoBootstrap() {

  }
}

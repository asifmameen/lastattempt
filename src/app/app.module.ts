import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { QuilleditorComponent } from './quilleditor/quilleditor.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuilleditorComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

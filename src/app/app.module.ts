import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployersComponent } from './employers/employers.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployersComponent,
    AddEmployerComponent,
    UpdateEmployerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

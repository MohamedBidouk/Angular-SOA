import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployersComponent } from './employers/employers.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { HttpClientModule} from '@angular/common/http';
import { SearchPerCategoryComponent } from './search-per-category/search-per-category.component';
import { SearchPerNameComponent } from './search-per-name/search-per-name.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployersComponent,
    AddEmployerComponent,
    UpdateEmployerComponent,
    SearchPerCategoryComponent,
    SearchPerNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

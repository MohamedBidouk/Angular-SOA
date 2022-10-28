import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployersComponent } from './employers/employers.component';
import { AddEmployerComponent } from './add-employer/add-employer.component';
import { UpdateEmployerComponent } from './update-employer/update-employer.component';
import { SearchPerCategoryComponent } from './search-per-category/search-per-category.component';
import { SearchPerNameComponent } from './search-per-name/search-per-name.component';

const routes: Routes = [
  {path: "employers", component : EmployersComponent},
  {path: "add-employer", component : AddEmployerComponent},
  {path: "update-employer/:id", component: UpdateEmployerComponent},
  {path: "searchPerCategory", component: SearchPerCategoryComponent},
  {path: "searchPerName", component: SearchPerNameComponent},
  {path: "", redirectTo: "employers", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-search-per-category',
  templateUrl: './search-per-category.component.html',
  styles: [
  ]
})
export class SearchPerCategoryComponent implements OnInit {

  employers! : employer[];
  idCategory! : number;
  categorys! : Category[];

  constructor(private employerService : EmployerService) { }

  ngOnInit(): void {
    this.employerService.listCategorys().subscribe(cats => {
      this.categorys = cats._embedded.categorys;
      console.log(cats);
    });
  }

  onChange() {
    this.employerService.searchPerCategory(this.idCategory).subscribe(emps =>{this.employers=emps});
    }
}

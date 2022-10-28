import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-list-categorys',
  templateUrl: './list-categorys.component.html',
  styles: [
  ]
})
export class ListCategorysComponent implements OnInit {

  categorys! : Category[];

  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.employerService.listCategorys().subscribe(cats =>{
      this.categorys = cats._embedded.categorys;
      console.log(cats);
    });
  }

}

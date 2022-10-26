import { Component, OnInit } from '@angular/core';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';
import { Category } from '../model/Category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent implements OnInit {

  newEmployer = new employer();
  categorys! : Category[];

  newIdCat! : number;
  newCategory! : Category;
  constructor(private employerService: EmployerService,
              private router :Router) { }

  ngOnInit(): void {
    this.categorys = this.employerService.listCategorys();
  }

  addEmployer(){
    // console.log(this.newEmployer);
    this.newCategory = this.employerService.consultCategory(this.newIdCat);
    this.newEmployer.category = this.newCategory;
    this.employerService.addEmployer(this.newEmployer);
    this.router.navigate(['employers']);
  }

}

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
    this.employerService.listCategorys().subscribe(cats => {
      this.categorys = cats._embedded.categorys;
      console.log(cats);
    });
  }

  addEmployer(){
    this.newEmployer.category = this.categorys.find(cat => cat.idCat == this.newIdCat)!;
    this.employerService.addEmployer(this.newEmployer).subscribe(emp =>{
      console.log(emp);
      this.router.navigate(['employers']);
    });
  }

}

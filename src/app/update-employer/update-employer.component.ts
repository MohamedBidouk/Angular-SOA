import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';
import { employer } from '../model/employer.model';
import { Category } from '../model/Category.model';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styles: [
  ]
})
export class UpdateEmployerComponent implements OnInit {
  categorys! : Category[];
  updatedCatId! : number;

  currentEmployer = new employer();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private employerService: EmployerService) { }

  ngOnInit(): void {

    this.categorys = this.employerService.listCategorys();
    this.currentEmployer = this.employerService.consultEmployer(this.activatedRoute.snapshot.params['id']);
    this.updatedCatId = this.currentEmployer.category.idCat;
    }

  updateEmployer(){
    this.employerService.updateEmployer(this.currentEmployer);
    this.router.navigate(['employers']);


  }

}

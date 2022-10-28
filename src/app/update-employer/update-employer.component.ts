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

    this.employerService.listCategorys().subscribe(cats => {
      this.categorys = cats._embedded.categorys;
      console.log(cats);
    });
    this.employerService.consultEmployer(this.activatedRoute.snapshot.params['id']).subscribe( emp =>{ this.currentEmployer = emp; 
      this.updatedCatId = this.currentEmployer.category.idCat;
    } ) ;
    
    }

  updateEmployer(){
    this.currentEmployer.category = this.categorys.find(cat => cat.idCat == this.updatedCatId)!;
    this.employerService.updateEmployer(this.currentEmployer).subscribe(emp => {
      this.router.navigate(['employers']);
    });
  }

}

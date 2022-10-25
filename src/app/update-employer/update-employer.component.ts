import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployerService } from '../services/employer.service';
import { employer } from '../model/employer.model';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styles: [
  ]
})
export class UpdateEmployerComponent implements OnInit {

  currentEmployer = new employer();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private employerService: EmployerService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentEmployer = this.employerService.consultEmployer(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentEmployer);
    }

  updateEmployer(){
    this.employerService.updateEmployer(this.currentEmployer);
    this.router.navigate(['employers']);


  }

}

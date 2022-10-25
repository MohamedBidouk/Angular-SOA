import { Component, OnInit } from '@angular/core';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.css']
})
export class AddEmployerComponent implements OnInit {

  newEmployer = new employer();
  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
  }

  addEmployer(){
    // console.log(this.newEmployer);
    this.employerService.addEmployer(this.newEmployer);
  }

}

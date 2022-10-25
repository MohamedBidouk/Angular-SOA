import { Component, OnInit } from '@angular/core';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {

  employers? : employer[];
  
  constructor(private employerService: EmployerService) {
    
   }

  ngOnInit(): void {
    this.employers = this.employerService.listEmployers();
  }

  deleteEmployer(e: employer)
  {
    let conf = confirm("Are you sure to delete "+e.nameEmployer +" ?");
    if (conf)
      // console.log(e);
      this.employerService.deleteEmployer(e);
  }

}

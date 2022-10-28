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
    this.loadEmployers();
  }

  loadEmployers(){
    this.employerService.listEmployers().subscribe(emps =>{
      console.log(emps);
      this.employers = emps;
    });
  }

  deleteEmployer(e: employer)
  {
    let conf = confirm("Are you sure to delete "+e.nameEmployer +" ?");
    if (conf)
      this.employerService.deleteEmployer(e.idEmployer).subscribe(() =>{
        console.log(e.nameEmployer +" deleted");
        this.loadEmployers();
      });
  }

}

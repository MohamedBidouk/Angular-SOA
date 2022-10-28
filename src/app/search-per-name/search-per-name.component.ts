import { Component, OnInit } from '@angular/core';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-search-per-name',
  templateUrl: './search-per-name.component.html',
  styles: [
  ]
})
export class SearchPerNameComponent implements OnInit {

  employers! : employer[];
  nameEmployer! : string;
  
  constructor(private employerService : EmployerService) { }

  ngOnInit(): void {
  }

  searchPerName(){
    this.employerService.searchPerName(this.nameEmployer).
    subscribe(emps => {
    this.employers = emps;
    console.log(emps)});
    }
}

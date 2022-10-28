import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { employer } from '../model/employer.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-search-per-name',
  templateUrl: './search-per-name.component.html',
  styles: [
  ]
})
export class SearchPerNameComponent implements OnInit {

  allEmployers! : employer[];
  employers!: employer[];
  nameEmployer! : string;
  searchTerm!: string;
  
  constructor(private employerService : EmployerService) { }

  ngOnInit(): void {
    this.employerService.listEmployers().subscribe(emps => {
    this.allEmployers = emps;
    });
  }

  onKeyUp(filterText : string){
    this.employers = this.allEmployers.filter(item => item.nameEmployer.toLowerCase().includes(filterText));
  }
  
}

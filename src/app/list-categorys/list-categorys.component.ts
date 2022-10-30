import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category.model';
import { EmployerService } from '../services/employer.service';

@Component({
  selector: 'app-list-categorys',
  templateUrl: './list-categorys.component.html',
  styles: [
  ]
})
export class ListCategorysComponent implements OnInit {

  categorys! : Category[];
  added:boolean=true;
  updatedCat:Category = {"idCat":0, "nameCat":""};

  constructor(private employerService: EmployerService) { }

  ngOnInit(): void {
    this.chargeCategorys()
  }

  chargeCategorys(){
    this.employerService.listCategorys().
    subscribe(cats => {this.categorys = cats._embedded.categorys;
    console.log(cats);
    });
    }

  categoryUpdated(cat:Category){
    console.log("Cat updated event",cat);
    this.employerService.addCategory(cat).
     subscribe( ()=> this.chargeCategorys());
    }

    updateCat(cat:Category) {
      this.updatedCat=cat;
      this.added=false; 
      this.chargeCategorys();
    }
    
      

}

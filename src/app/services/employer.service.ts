import { Injectable } from '@angular/core';

import { employer } from '../model/employer.model';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  
  employers : employer[];

  constructor() { 
    this.employers = [
      { idEmployer : 1, nameEmployer : "Mohamed", salaryEmployer : 3000.600, dateCreation: new Date("01/14/2011")},
      { idEmployer : 2, nameEmployer : "Aissa", salaryEmployer : 450, dateCreation : new Date("12/17/2010")},
      { idEmployer : 3, nameEmployer :"Rayen", salaryEmployer : 900.123, dateCreation : new Date("02/20/2020")}
      ];
      
  }

  listEmployers():employer[] {
    return this.employers;
  }

  addEmployer( emp : employer){
    this.employers.push(emp);
  }

  deleteEmployer( emp: employer){
    //supprimer le produit prod du tableau produits
    const index = this.employers.indexOf(emp, 0);
    if (index > -1) {
      this.employers.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idEmployer === cur.idEmployer) {
    this.produits.splice(index, 1);
    }
    }); */
    }

    
    consultEmployer(id:number): employer{
      return this.employers.find(e => e.idEmployer == id)!;
      }

    sortEmployers(){
        this.employers = this.employers.sort((n1,n2) => {
          if (n1.idEmployer > n2.idEmployer) {
                return 1;
          }
          if (n1.idEmployer < n2.idEmployer) {
              return -1;
          }
              return 0;
        });
      }

      updateEmployer(e: employer){
        // console.log(p);
        this.deleteEmployer(e);
        this.addEmployer(e);
        this.sortEmployers();
      }


        
}

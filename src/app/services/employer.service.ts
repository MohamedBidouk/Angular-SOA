import { Injectable } from '@angular/core';

import { employer } from '../model/employer.model';
import { Category } from '../model/Category.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryWrapper } from '../model/CategoryWrapped.model';
const HttpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  apiURL: string = 'http://localhost:8080/Employer1/api';
  apiURLCat: string = 'http://localhost:8080/Employer1/cat';
  categorys: Category[];
  employers : employer[];

  constructor(private http : HttpClient) { 
    this.categorys = [ {idCat : 1, nameCat : "PC"},
      {idCat : 2, nameCat : "Imprimante"}];

    this.employers = [
      { idEmployer : 1, nameEmployer : "Mohamed", salaryEmployer : 3000.600, dateRec: new Date("01/14/2011"), 
      category : {idCat : 1, nameCat : "PC"}},
      { idEmployer : 2, nameEmployer : "Aissa", salaryEmployer : 450, dateRec : new Date("12/17/2010"),
        category : {idCat : 1, nameCat : "PC"}},
      { idEmployer : 3, nameEmployer :"Rayen", salaryEmployer : 900.123, dateRec : new Date("02/20/2020"),
      category : {idCat : 2, nameCat : "Imprimante"}}
      ];
      
  }

  listCategorys() : Observable<CategoryWrapper> {
    return this.http.get<CategoryWrapper>(this.apiURLCat);
    }

    consultCategory(id:number): Category{
      return this.categorys.find(cat => cat.idCat == id)!;
      }

  listEmployers(): Observable<employer[]> {
    return this.http.get<employer[]>(this.apiURL);
  }

  addEmployer( emp : employer):Observable<employer>{
    return this.http.post<employer>(this.apiURL, emp, HttpOptions);
  }

  deleteEmployer( id : number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, HttpOptions);
    }

    
    consultEmployer(id:number): Observable<employer>{
      const url = `${this.apiURL}/${id}`;
      return this.http.get<employer>(url);
      }

      sortEmployers(): void{
        this.employers = this.employers.sort((n1,n2) => {
          if (n1 > n2) {
                return 1;
          }
          if (n1 < n2) {
              return -1;
          }
              return 0;
        });
      }
   

      updateEmployer(emp: employer) : Observable<employer>{
        // console.log(p);
        return this.http.put<employer>(this.apiURL, emp, HttpOptions);
      }

      searchPerCategory(idCat: number):Observable< employer[]> {
        const url = `${this.apiURL}/empscat/${idCat}`;
        return this.http.get<employer[]>(url);
        }
        
        searchPerName(name: string):Observable< employer[]> {
          const url = `${this.apiURL}/empsByName/${name}`;
          return this.http.get<employer[]>(url);
          }
          
        
}

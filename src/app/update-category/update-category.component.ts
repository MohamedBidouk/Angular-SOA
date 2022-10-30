import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../model/Category.model';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styles: [
  ]
})
export class UpdateCategoryComponent implements OnInit {

  @Input()
  category!: Category;

  @Output()
  categoryUpdated = new EventEmitter<Category>();

  @Input()
  added!:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.category);
  }

  saveCategory(){
    this.categoryUpdated.emit(this.category);
    }
    

}

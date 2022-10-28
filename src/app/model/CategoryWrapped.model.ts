import { Category } from "./Category.model";

export class CategoryWrapper{
    _embedded!:{categorys: Category[]};
}
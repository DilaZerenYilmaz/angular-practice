import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryListItem } from '../models/category-list-item';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { NewCategory } from '../models/new-category';
import { AddedCategory } from '../models/added-category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiControllerUrl = `${environment.apiUrl}/categories`

  constructor(private http:HttpClient) { }

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<CategoryListItem[]> {
     return this.http.get<CategoryListItem[]>(`${this.apiControllerUrl}/${id}`);
   }

  add(category: NewCategory): Observable<AddedCategory> {
    return this.http.post<AddedCategory>(this.apiControllerUrl, category)
  }


 edit(updatedData: any, id: number): Observable<CategoryListItem[]>{
  return this.http.put<CategoryListItem[]>(`${this.apiControllerUrl}/${id}`, updatedData)
}

// delete()


}
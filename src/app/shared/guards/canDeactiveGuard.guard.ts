import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditDetailCategoryComponent } from '../../routes/categories/edit-detail-category/edit-detail-category.component';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<EditDetailCategoryComponent> {
  canDeactivate(component: EditDetailCategoryComponent): boolean {
    if (component.dirtyFormService.formDirty) {
      return window.confirm('Yaptığınız değişiklikleri kaydetmediniz. Sayfadan ayrılmak istediğinize emin misiniz?');
    }
    return true;
  }
}
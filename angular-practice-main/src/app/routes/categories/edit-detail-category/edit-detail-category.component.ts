import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { EditCategoryPageComponent } from '../edit-category-page/edit-category-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryListGroupComponent } from '../../../features/categories/components/category-list-group/category-list-group.component';
import { CategoriesService } from '../../../features/categories/services/categories.service';
import { CategoryListItem } from '../../../features/categories/models/category-list-item';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewCategory } from '../../../features/categories/models/new-category';

@Component({
  selector: 'app-edit-detail-category',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ReactiveFormsModule
  ],
  templateUrl: './edit-detail-category.component.html',
  styleUrl: './edit-detail-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDetailCategoryComponent implements OnInit {
  category: any;
  saveCategoryForm!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
  ){}



  ngOnInit(): void {
this.getCategoryIdFromRoute();
this.createFormForCategory();
}

private createFormForCategory(){
  this.saveCategoryForm = this.formBuilder.group({
    name:['',[Validators.required, Validators.minLength(1)]],
    description: ['',[Validators.required, Validators.minLength(1)]]
  })
}


save() {
const saveCategory: NewCategory = {
  name: this.saveCategoryForm.value.name,
  description: this.saveCategoryForm.value.description,
};
this.categoriesService.edit(saveCategory, this.category.id).subscribe({
  next: (editedCategory) =>{
    console.log('KATEGORİ DEĞİŞTİRİLDİ.', editedCategory);
  },
})
}

saveName(){
  this.save();
}

getCategoryIdFromRoute() {
  this.route.params.pipe(
    switchMap(params => {
      const categoryId = Number(params['categoryId']);
      if (!categoryId || isNaN(categoryId)) {
        this.router.navigate(['/categories/edit']);
        throw new Error('Geçersiz Kategori ID: ' + categoryId);
      }
      return this.categoriesService.getById(categoryId);

    })
  ).subscribe(
    (category) => {
      console.log('API Response:', category); 
      this.category = category;
      this.saveCategoryForm.patchValue({name: this.category?.name, description: this.category?.description})
    },
    (error) => {
      console.error('Kategori alınamadı', error);
    }
  );

}}

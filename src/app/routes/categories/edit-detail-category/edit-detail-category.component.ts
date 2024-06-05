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
import { error } from 'node:console';
import { FormControlErrorMessagePipe } from '../../../shared/pipes/formControlErrorMessage.pipe';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { NoCharacterInputDirective } from '../../../shared/directives/noCharacterInput.directive';
import { DirtyFormService } from '../../../shared/services/dirtyForm.service';

@Component({
  selector: 'app-edit-detail-category',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ReactiveFormsModule,
    FormControlErrorMessagePipe,
    ButtonDirective,
    NoCharacterInputDirective
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
    public dirtyFormService: DirtyFormService
  ){}



  ngOnInit(): void {
    this.createFormForCategory();
    this.getCategoryIdFromRoute();
}

private createFormForCategory(){
  this.saveCategoryForm = this.formBuilder.group({
    name:['',[Validators.required, Validators.minLength(3)]],
    description: ['',[Validators.required, Validators.minLength(3)]]
  });

  this.saveCategoryForm.valueChanges.subscribe((value) => {
    // console.log('Form değerleri değişti:', value);
    this.dirtyFormService.setFormDirty(this.saveCategoryForm);
  });
}


save() {
const saveCategory: NewCategory = {
  name: this.saveCategoryForm.value.name,
  description: this.saveCategoryForm.value.description,
};
this.categoriesService.edit(saveCategory, this.category.id).subscribe({
  next: (editedCategory) =>{
    console.log('KATEGORİ DEĞİŞTİRİLDİ.', editedCategory);
    this.getCategoryIdFromRoute();
  },
  error: (error) => {
    console.error('Kategori güncellenemedi', error);
  }
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
  ).subscribe({
    next: (category) => {
      console.log('API Response:', category);
      this.category = category;
      if (this.category){
        this.saveCategoryForm.patchValue({
          name: this.category?.name,
          description: this.category?.description
        });
      }
    },
    error:(error) => {
      console.error('Kategori alınamadı.', error);
    }
  });
}}

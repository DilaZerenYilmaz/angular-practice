import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { NewCategory } from '../../models/new-category';
import { error } from 'console';

@Component({
  selector: 'app-new-category-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-category-form.component.html',
  styleUrl: './new-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewCategoryFormComponent implements OnInit {

  newCategoryFormGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
  ){}
  ngOnInit(): void {
    this.createForm();
  }
  private createForm() {
  this.newCategoryFormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  })
}

  add(){
    const newCategory: NewCategory = {
      name: this.newCategoryFormGroup.value.name,
      description: this.newCategoryFormGroup.value.description,
    };
    this.categoriesService.add(newCategory).subscribe({
      next: (addedCategory) =>{
        console.log('Category Added', addedCategory);
      },
      error: (error) =>{
        console.error('Error adding category', error);
      },
      complete: () =>{
        console.log('Add category complete');
        
      }
    })
  }

  onFormSubmit() {
    if (this.newCategoryFormGroup.invalid){
      console.error('Form is invalid');
      return;
    }
    this.add();
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BasicLayoutComponent } from '../../../shared/components/basic-layout/basic-layout.component';
import { TableComponent } from '../../../shared/components/table/table.component';
import { CategoryListItem } from '../../../features/categories/models/category-list-item';
import { CategoriesService } from '../../../features/categories/services/categories.service';
import { CategoryListGroupComponent } from '../../../features/categories/components/category-list-group/category-list-group.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-category-page',
  standalone: true,
  imports: [
    CommonModule,
    BasicLayoutComponent,
    TableComponent,
    CategoryListGroupComponent
  ],
  templateUrl: './edit-category-page.component.html',
  styleUrl: './edit-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EditCategoryPageComponent implements OnInit {

  categories : CategoryListItem[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ){}

  categoryColumns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'description', title: 'Description' }
  ];

  ngOnInit(): void {
    this.getList()
  } 
  getList() {
    this.categoriesService.getList().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
    })
  }
 
  onButtonClick(item: any) {
    console.log("TIKLANDI...." + item);
    this.router.navigate(['/categories/edit/'+ item.id])
    }

}



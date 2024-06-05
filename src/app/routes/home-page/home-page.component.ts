import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from '../../shared/components/basic-layout/basic-layout.component';
import { CategoryListGroupComponent } from '../../features/categories/components/category-list-group/category-list-group.component';
import { ProductCardListComponent } from '../../features/products/components/product-card-list/product-card-list.component';
import { ProductListItem } from '../../features/products/models/product-list-item';
import { MultipleDirective } from '../../shared/directives/multiple.directive';
import { WelcomeDirective } from '../../shared/directives/welcome.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BasicLayoutComponent,
    CategoryListGroupComponent,
    ProductCardListComponent,
    MultipleDirective,
    WelcomeDirective
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
selectedCategoryId: number | null = null;

constructor(
  private router: Router,
  private route: ActivatedRoute
){}

  ngOnInit(): void {
    this.getProductFiltersFromRoute();
  }
  
  getProductFiltersFromRoute() {
    this.route.queryParams.subscribe((queryParams) => {
      const categoryId = queryParams['categoryId'];
      if(categoryId) this.selectedCategoryId = Number(categoryId);
      
      console.log('query params değişti: ' + this.selectedCategoryId); 
    }).unsubscribe();
  }

onChangeCategorySelect(event: number|null) {
  this.selectedCategoryId = event;

  const queryParams = {
    
  }
  console.log('category lisy event göndererek değeri değiştirdi: ' + this.selectedCategoryId);
  this.router.navigate([], {
    queryParams: {categoryId: this.selectedCategoryId},
    relativeTo: this.route,
  });
}

onViewProduct(product: ProductListItem) {
  this.router.navigate(['products','detail', product.id])
}

}

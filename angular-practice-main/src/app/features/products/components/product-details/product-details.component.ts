import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductDetail } from '../../models/product-detail';
import { PlaceholderComponent } from '../../../../shared/components/placeholder/placeholder/placeholder.component';
import { ButtonComponent } from '../../../../shared/components/button/button/button.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    PlaceholderComponent,
    ButtonComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {

  @Input() id!: number;
  product!: ProductDetail;

  constructor(
    private productsService: ProductsService,
    private change:ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getDetails()
  }
  getDetails() {
    this.productsService.getById(this.id).subscribe((product) => {
      this.product = product;
      this.change.markForCheck();
    })
  }

  onaAddToCart() {
  }
 }

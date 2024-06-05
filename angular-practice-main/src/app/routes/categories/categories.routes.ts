import { Routes } from "@angular/router";
import { NewCategoryPageComponent } from "./new-category-page/new-category-page.component";
import { EditCategoryPageComponent } from "./edit-category-page/edit-category-page.component";
import { EditDetailCategoryComponent } from "./edit-detail-category/edit-detail-category.component";

export const categoriesRoutes : Routes = [
    {
        path: 'categories/new',
        component: NewCategoryPageComponent,
    },
    {
        path: 'categories/edit',
        component: EditCategoryPageComponent
    },
    {
        path: 'categories/edit/:categoryId',
        component: EditDetailCategoryComponent
    }
]
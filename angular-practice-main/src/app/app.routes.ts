import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent 
    },

    ...authRoutes,
    ...productsRoutes,
    ...categoriesRoutes,
];
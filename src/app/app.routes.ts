import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';
import { TranslateComponent } from './shared/components/translate/translate.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent 
    },
    {
        path: 'translate',
        component: TranslateComponent 
    },

    ...authRoutes,
    ...productsRoutes,
    ...categoriesRoutes,
];
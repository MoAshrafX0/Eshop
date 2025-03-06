import { Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';

import { LoginComponent } from './pages/components/login/login.component';
import { RegisterComponent } from './pages/components/register/register.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './pages/components/home/home.component';
import { ProductsComponent } from './pages/components/products/products.component';
import { CategoresComponent } from './pages/components/categores/categores.component';
import { BradsComponent } from './pages/components/brads/brads.component';
import { CartsComponent } from './pages/components/carts/carts.component';

import { NotfoundComponent } from './pages/components/notfound/notfound.component';
import { authGuard } from './core/gurdes/auth.guard';
import { logGuard } from './core/gurdes/log.guard';

export const routes: Routes = [

    // default path
    {path:'',redirectTo:'home',pathMatch:'full'},
    //    ================ ** auth layout ** ===========
    {
        path: '', component: AuthComponent,
        canActivate: [logGuard],
        children: [
            {
                path: 'login',
               component:LoginComponent,
                title: 'Login'
            },
            {
                path: 'register', loadComponent: () => import('./pages/components/register/register.component')
                    .then((c) => c.RegisterComponent),
                title: 'Register'
            },
            {
                path: 'restpassword', loadComponent: () => import('./features/forget-password/forget-password.component')
                    .then((c) => c.ForgetPasswordComponent),
                title: 'Forget Passworrd'
            }
        ]
    },
    //  ========== ** main layout  ** ===========
    {
        path: '', component: MainComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'home',
                canActivate: [authGuard],
                loadComponent: () => import('./pages/components/home/home.component')
                    .then((c) => c.HomeComponent),
                title: 'Home'

            },
            {
                path: 'products', loadComponent: () => import('./pages/components/products/products.component')
                    .then((c) => c.ProductsComponent),
                title: 'Products'
            },
            {
                path: 'categores', loadComponent: () => import('./pages/components/categores/categores.component')
                    .then((c) => c.CategoresComponent),
                title: 'Categores'
            },
            {
                path: 'brands', loadComponent: () => import('./pages/components/brads/brads.component')
                    .then((c) => c.BradsComponent),
                title: 'Brands'
            },
            {
                path: 'carts', loadComponent: () => import('./pages/components/carts/carts.component')
                    .then((c) => c.CartsComponent),
                title: 'Carts'
            },
            {
                path: 'detiles/:id', loadComponent: () => import('./features/detiles/detiles.component')
                    .then((c) => c.DetilesComponent),
                title: 'Detiles'
            },
            {
                path: 'checkout/:id', loadComponent: () => import('./features/checkout/checkout.component')
                    .then((c) => c.CheckoutComponent),
                title: 'Check Out'
            
            },
            {
                path: 'allorders/:id', loadComponent: () => import('./pages/components/all-orders/all-orders.component')
                    .then((c) => c.AllOrdersComponent),
                title: 'AllOrders'
            },
            {
                path: 'allorders', loadComponent: () => import('./pages/components/all-orders/all-orders.component')
                    .then((c) => c.AllOrdersComponent),
                title: 'AllOrders'
            }
        ]
    },

    //  notFound path
    {
        path: '**', component: NotfoundComponent, title: 'Not Found'
    }

];

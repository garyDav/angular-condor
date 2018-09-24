import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CashierComponent } from './cashier/cashier.component'
import { WaiterComponent } from './waiter/waiter.component'
import { CookComponent } from './cook/cook.component'

const routes: Routes = [
  { path: '', redirectTo: '/mesero', pathMatch: 'full' },
  { path: 'cajero', component: CashierComponent },
  { path: 'mesero', component: WaiterComponent },
  { path: 'cocina', component: CookComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

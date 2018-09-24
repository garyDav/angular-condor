import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { CashierComponent } from './cashier/cashier.component';
import { CookComponent } from './cook/cook.component';
import { WaiterComponent } from './waiter/waiter.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    CashierComponent,
    CookComponent,
    WaiterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

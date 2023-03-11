import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsHeaderComponent } from './components/accounts-header/accounts-header.component';
import { InvestmentBoardComponent } from './components/investment-board/investment-board.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { AccountEventComponent } from './components/account-event/account-event.component';
import { AccountEventFormComponent } from './components/account-event-form/account-event-form.component';
import { DeleteConfirmModalComponent } from './components/delete-confirm-modal/delete-confirm-modal.component';
import { BudgetComponent } from './components/budget/budget.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { BudgetItemFormComponent } from './components/budget-item-form/budget-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AccountFormComponent,
    UserFormComponent,
    TransactionFormComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AccountsHeaderComponent,
    InvestmentBoardComponent,
    HomeComponent,
    AccountEventComponent,
    AccountEventFormComponent,
    DeleteConfirmModalComponent,
    BudgetComponent,
    BudgetFormComponent,
    BudgetItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

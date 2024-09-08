import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { routes } from './app.routes';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  providers: [provideHttpClient(), provideRouter(routes), UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

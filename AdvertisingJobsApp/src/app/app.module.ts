import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';
import { AuthGuard } from './guard/auth.guard';
import { JobItemComponent } from './jobinfo/job-item/job-item.component';
import { JobListComponent } from './jobinfo/job-list/job-list.component';
import { PersonalJobListComponent } from './jobinfo/personal-job-list/personal-job-list.component';
import { AddJobAdComponent } from './jobinfo/add-job-ad/add-job-ad.component';
import { ApplyComponent } from './jobinfo/apply/apply.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatGridListModule} from '@angular/material/grid-list';
// import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    JobItemComponent,
    JobListComponent,
    PersonalJobListComponent,
    AddJobAdComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

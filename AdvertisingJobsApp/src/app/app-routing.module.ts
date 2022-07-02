import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AddJobAdComponent } from './jobinfo/add-job-ad/add-job-ad.component';
import { ApplyComponent } from './jobinfo/apply/apply.component';
import { JobListComponent } from './jobinfo/job-list/job-list.component';
import { PersonalJobListComponent } from './jobinfo/personal-job-list/personal-job-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'jobinfo/list', pathMatch:'full'},
  {path:'jobinfo/list', component:JobListComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'jobinfo/plist', component:PersonalJobListComponent},
  {path:'jobinfo/apply', component:ApplyComponent},
  {path:'jobinfo/add', component:AddJobAdComponent, canActivate:[AuthGuard]},
  {path:'**', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

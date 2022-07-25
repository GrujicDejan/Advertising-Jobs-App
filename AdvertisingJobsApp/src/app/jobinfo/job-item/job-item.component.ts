import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplyModel } from 'src/app/model/applyModel';
import { JobInfoModel } from 'src/app/model/jobInfoModel';
import { JobService } from 'src/app/services/job.service';
import { DialogApplyComponent } from '../dialog-apply/dialog-apply.component';
import { DialogContentExampleComponent } from '../dialog-content-example/dialog-content-example.component';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {

  @Input()
  public job: JobInfoModel;

  user: string;

  public applications: ApplyModel[];

  constructor(private router:Router, private jobService:JobService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || '';
  }

  apply(title: string, email: string) {
    localStorage.setItem('title', title);
    localStorage.setItem('email', email);
    this.router.navigate(["/jobinfo/apply"]);
  }

  delete(title: string, company: string) {
    this.jobService.delete(title, company).subscribe(resp=>{
      alert("Succesfuly deleted");
      window.location.reload();
    });
  }

  viewDialog() {
    this.dialog.open(DialogContentExampleComponent, {
      data: this.job.applications
    });
  }

  applyDialog() {
    this.dialog.open(DialogApplyComponent, {
      data: this.job
    });
  }

}

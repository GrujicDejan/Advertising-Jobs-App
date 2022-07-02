import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplyModel } from 'src/app/model/applyModel';
import { JobInfoModel } from 'src/app/model/jobInfoModel';
import { JobService } from 'src/app/services/job.service';

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

  show = true;

  constructor(private router:Router, private jobService:JobService) { }

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

  veiwJobApplications() {
    this.show = !this.show;
  }

}

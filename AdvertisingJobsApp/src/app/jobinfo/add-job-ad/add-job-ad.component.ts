import { Component, OnInit } from '@angular/core';
import { JobInfoModel } from 'src/app/model/jobInfoModel';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-add-job-ad',
  templateUrl: './add-job-ad.component.html',
  styleUrls: ['./add-job-ad.component.scss']
})
export class AddJobAdComponent implements OnInit {

  jobInfo: JobInfoModel;
  message = '';

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  addJobAd(jobForm:any) {
    if (!jobForm.invalid) {
      this.jobInfo = jobForm.value.jobInfo;
      const now = new Date();
      this.jobInfo.date = now.toLocaleDateString();
      this.jobInfo.id =  Math.floor(Math.random() * 1000);
      this.jobInfo.user = localStorage.getItem('user') || '';
      this.jobInfo.applications = [];

      this.jobService.addJobAd(this.jobInfo).subscribe(resp=>alert("created"));

    } else {
      this.message = 'All fields must be filled';
    }
    
  }

}

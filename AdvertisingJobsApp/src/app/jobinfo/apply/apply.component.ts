import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyModel } from 'src/app/model/applyModel';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  email = localStorage.getItem("email");
  title = localStorage.getItem("title") || '';
  applyInfo: ApplyModel;
  message = '';

  constructor(private jobService:JobService, private router:Router) { }

  ngOnInit(): void {
  }

  apply(form:any) {

    if (!form.invalid) {
      this.applyInfo = form.value.applyInfo;
      this.applyInfo.subject = localStorage.getItem("title") || ""; 
      this.jobService.saveJobApply(this.applyInfo, this.title).subscribe(resp=>{
        alert("Succesfuly aplied")
        this.router.navigate(["/jobinfo/list"]);
      });
    } else {
      this.message = 'All fields must be filled';
    }
    
  }

}

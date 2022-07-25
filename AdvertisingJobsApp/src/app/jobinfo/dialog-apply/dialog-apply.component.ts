import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplyModel } from 'src/app/model/applyModel';
import { JobInfoModel } from 'src/app/model/jobInfoModel';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-dialog-apply',
  templateUrl: './dialog-apply.component.html',
  styleUrls: ['./dialog-apply.component.scss']
})
export class DialogApplyComponent implements OnInit {

  newApply: ApplyModel;
  content:string;
  portfolio:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: JobInfoModel, private jobService: JobService) {}

  apply(applyForm: any): void {
    if (!applyForm.invalid) {
      this.newApply = applyForm.value.applyInfo;
      this.newApply.subject = this.data.jobTitle;
      this.jobService.saveJobApply(this.newApply, this.data.jobTitle).subscribe(resp=>{
        alert("Succesfuly aplied")
      });
    } else {
      alert("All fields must be filled")
    }
    
  }

  ngOnInit(): void {
  }

}

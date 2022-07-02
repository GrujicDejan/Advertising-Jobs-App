import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { JobInfoModel } from 'src/app/model/jobInfoModel';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-personal-job-list',
  templateUrl: './personal-job-list.component.html',
  styleUrls: ['./personal-job-list.component.scss']
})
export class PersonalJobListComponent implements OnInit {

  public jobs$: Observable<JobInfoModel[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadJobList: Subject<void> = new Subject();

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobs$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadJobList)
      .switchMap((query) => this.jobService.getJobByUser(this.searchTerm));
  } 

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onCreate() {
    this.reloadJobList.next();
  }


}

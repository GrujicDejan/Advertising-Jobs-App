import { HttpClient } from '@angular/common/http';
import { toTypeScript } from '@angular/compiler';
import { ApplicationModule, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { ApplyModel } from '../model/applyModel';
import { JobInfoModel } from '../model/jobInfoModel';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  BACKEND_BASE = "http://localhost:3000";

  arr:ApplyModel[];

  getJobs(query: string): Observable<any> {
    return this.httpClient.get(this.BACKEND_BASE + '/api/jobs', {
      params: {q:query}
    }).pipe(
      map((res:any)=>res.sort((x:JobInfoModel, y:JobInfoModel)=> x.date > y.date? -1:1))
    ).pipe(
      map((res:any)=>res.filter((j:JobInfoModel) => j.user !== localStorage.getItem('user')))
    )
  }
  
  getJobByUser(user: string): Observable<any> {
    return this.httpClient.get(this.BACKEND_BASE + '/api/jobs', {
      params: {q:user}
    }).pipe(
      map((res:any)=>res.filter((j:JobInfoModel) => j.user == localStorage.getItem('user')))
    ).pipe(
      map((res:any)=>res.sort((x:JobInfoModel, y:JobInfoModel)=> x.date > y.date? -1:1))
    );
  }

  addJobAd(jobAd:JobInfoModel): Observable<any> {
    return this.httpClient.post(this.BACKEND_BASE + '/api/jobs', jobAd);
  }

  saveJobApply(applyInfo:ApplyModel, title:string): Observable<any> {
    return this.httpClient.patch(this.BACKEND_BASE + '/api/jobs', applyInfo, {
      params: {t:title}
    });
  }

  delete(title:string, company:string) {
    return this.httpClient.delete(this.BACKEND_BASE + '/api/jobs', {
      params: {t:title, c:company}
    });
  }
}

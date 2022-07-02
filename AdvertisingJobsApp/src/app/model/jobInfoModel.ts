import { ApplyModel } from "./applyModel";

export interface JobInfoModel {
    id:number;
    user:string;
    jobTitle:string;
    company:string;
    salary:number;
    engagement:string;
    description:string;
    requiredEducation:string;
    date:string;
    location:string;
    benefits:string;
    skills:string;
    email:string;
    applications:ApplyModel[];
}
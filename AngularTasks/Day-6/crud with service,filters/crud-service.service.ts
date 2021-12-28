import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { isEmptyBindingElement, isTemplateExpression, isTryStatement } from 'typescript';
import { Emp } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  dataArray:any[] =[];
  url = "http://localhost:3000/employees";

  constructor(private httpObj:HttpClient) { }

  getAllEmployees():Observable<Emp[]>{
    return this.httpObj.get<Emp[]>(this.url);    
  }

  getEmpyById(id:number):Observable<Emp>{
     return this.httpObj.get<Emp>(this.url + "/" + id);
  }

  createEmp(empobj:any):Observable<any>{
    return this.httpObj.post(this.url,empobj);
  }

  updateEmp(empobj:any):Observable<any>{
    let str = this.url + "/" + empobj.empno;
    console.log(str);
    return this.httpObj.put(str,empobj);
  }

  deleteEmpyById(id:number):Observable<any>{
    return this.httpObj.delete(this.url + "/" + id);
 }

 getEmpJobs():Observable<string[]>{
        return this.httpObj.get<any[]>(this.url).pipe(
          map(res => {return res.map(item => {return item.job });
         })
        );
   }

   getEmployeeNos():Observable<any[]>{
      return this.httpObj.get<any[]>(this.url).pipe(
         map(res => { 
           return res.map(item => { return {empno: item.empno} } )
         })
      )
   }

   getEmployeeByJobs(job:string):Observable<Emp[]>{
      return this.httpObj.get<Emp[]>(this.url).pipe(
         map(res => {
          return res.filter(item=> item.job == job );
        })
      );
   }

   getEmpnamesAndJobs():Observable<any[]>{
      return this.httpObj.get<any[]>(this.url).pipe(
        map(res => {
           return res.map(item => {
              return {empname:item.empname,job:item.job}});
            })
      );
   }
}

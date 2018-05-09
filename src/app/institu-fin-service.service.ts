

import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { InstitutionFin } from '../Model/InstitutionFinM';

@Injectable()
export class InstituFinServiceService {

  allInstitutionFinsUrl = "http://localhost:8088/api/Receptrices";
InstitutionFinUrl = "http://localhost:8088/api/Receptrice";
//Create constructor to get Http instance
constructor(private http:Http) { 
}
//Fetch all InstitutionFins
getAllInstitutionFins(): Observable<any> {

  console.log(this.allInstitutionFinsUrl);
    return this.http.get(this.allInstitutionFinsUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create InstitutionFin
createInstitutionFin(InstitutionFin: InstitutionFin):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.InstitutionFinUrl, InstitutionFin, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Fetch InstitutionFin by id
getInstitutionFinById(InstitutionFinId: string): Observable<InstitutionFin> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', InstitutionFinId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.get(this.InstitutionFinUrl, options)
     .map(this.extractData)
     .catch(this.handleError);
}	
//Update InstitutionFin
updateInstitutionFin(InstitutionFin: InstitutionFin):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.InstitutionFinUrl, InstitutionFin, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Delete InstitutionFin	
deleteInstitutionFinById(InstitutionFinId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set(' CodeE', InstitutionFinId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.delete(this.InstitutionFinUrl, options)
     .map(success => success.status)
     .catch(this.handleError);
}		
private extractData(res: Response) {
  let body = res.json();
    return body;
}
private handleError (error: Response | any) {
console.error(error.message || error);
return Observable.throw(error.status);
}

}

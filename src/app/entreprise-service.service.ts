import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Entreprise } from '../Model/EntrepriseM';


@Injectable()
export class EntrepriseServiceService {


//URLs for CRUD operations
allEntreprisesUrl = "http://localhost:8088/api/Entreprises";
EntrepriseUrl = "http://localhost:8088/api/Entreprise";
//Create constructor to get Http instance
constructor(private http:Http) { 
}
//Fetch all Entreprises
getAllEntreprises(): Observable<any> {

  console.log(this.allEntreprisesUrl);
    return this.http.get(this.allEntreprisesUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create Entreprise
createEntreprise(Entreprise: Entreprise):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.EntrepriseUrl, Entreprise, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Fetch Entreprise by id
getEntrepriseById(EntrepriseId: string): Observable<Entreprise> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', EntrepriseId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.get(this.EntrepriseUrl, options)
     .map(this.extractData)
     .catch(this.handleError);
}	
//Update Entreprise
updateEntreprise(Entreprise: Entreprise):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.EntrepriseUrl, Entreprise, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Delete Entreprise	
deleteEntrepriseById(EntrepriseId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set(' CodeE', EntrepriseId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.delete(this.EntrepriseUrl, options)
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
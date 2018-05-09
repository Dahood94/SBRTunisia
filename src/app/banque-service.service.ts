import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Banque } from '../Model/BanqueM';

@Injectable()
export class BanqueServiceService {

//URLs for CRUD operations
allBanquesUrl = "http://localhost:8088/api/Banques";
BanqueUrl = "http://localhost:8088/api/Banque";
//Create constructor to get Http instance
constructor(private http:Http) { 
}
//Fetch all Banques
getAllBanques(): Observable<any> {

  console.log(this.allBanquesUrl);
    return this.http.get(this.allBanquesUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create Banque
createBanque(Banque: Banque):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.BanqueUrl, Banque, options)
           .map(success => success.status)
           .catch(this.handleError);
           
}
//Fetch Banque by id
getBanqueById(BanqueId: string): Observable<Banque> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', BanqueId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.get(this.BanqueUrl, options)
     .map(this.extractData)
     .catch(this.handleError);
}	
//Update Banque
updateBanque(Banque: Banque):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.BanqueUrl, Banque, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Delete Banque	
deleteBanqueById(BanqueId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set(' CodeE', BanqueId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.delete(this.BanqueUrl, options)
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
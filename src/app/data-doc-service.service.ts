import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Document } from '../Model/doc';

@Injectable()
export class DataDocServiceService {


//URLs for CRUD operations
allDocumentsUrl = "http://localhost:8088/api/Doc_XBRLs";
DocumentUrl = "http://localhost:8088/api/Doc_XBRL";
//Create constructor to get Http instance
constructor(private http:Http) { 
}
//Fetch all Documents
getAllDocuments(): Observable<any> {

  console.log(this.allDocumentsUrl);
    return this.http.get(this.allDocumentsUrl)
       .map(this.extractData)
        .catch(this.handleError);

}
//Create Document
createDocument(Document: Document):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.DocumentUrl, Document, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Fetch Document by id
getDocumentById(DocumentId: string): Observable<Document> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('id', DocumentId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.get(this.DocumentUrl, options)
     .map(this.extractData)
     .catch(this.handleError);
}	
//Update Document
updateDocument(Document: Document):Observable<number> {
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.DocumentUrl, Document, options)
           .map(success => success.status)
           .catch(this.handleError);
}
//Delete Document	
deleteDocumentById(DocumentId: string): Observable<number> {
let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
let cpParams = new URLSearchParams();
cpParams.set('codedoc', DocumentId);			
let options = new RequestOptions({ headers: cpHeaders, search: cpParams });
return this.http.delete(this.DocumentUrl, options)
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



















  /*
  private DocumentURL = 'http://localhost:8088/api/Doc_XBRL';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}




  // Get all Document
  getDocument(): Promise<Document[]> {
    return this.http.get(this.DocumentURL)
      .toPromise()
      .then(response => response.json() as Document[])
      .catch(this.handleError);
  }


//chercher un document par son identifiant
  getDocumentById(codedoc: string): Promise<Document[]> {
    const url = `http://localhost:8088/api/Doc_XBRL/{codedoc}/${codedoc}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Document)
      .catch(this.handleError);
  }
//Ajouter un nouveau document
  create(Document: Document): Promise<Document> {
    return this.http
      .post(this.DocumentURL, JSON.stringify(Document), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Document)
      .catch(this.handleError);
  }
//supprimer un document
  delete(codedoc: number): Promise<void> {
    const url = `${this.DocumentURL}/${codedoc}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
*/
}

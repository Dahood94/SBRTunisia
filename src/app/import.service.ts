import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ImportService {


//URLs for CRUD operations
DocumentUrl = "http://localhost:8088/api/Doc_XBRL";
FileupUrl="http://localhost:8088/api/a";
FilesUrl="http://localhost:8088/api/getallfiles"
constructor(private http: HttpClient) {}
 
pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
  let formdata: FormData = new FormData();

  formdata.append('file', file);

  const req = new HttpRequest('POST', 'http://localhost:8088/api/a', formdata, {
    reportProgress: true,
    responseType: 'text'
  });

  return this.http.request(req);
}

getFiles(): Observable<any> {
  return this.http.get('http://localhost:8088/api/getallfiles')
}
}
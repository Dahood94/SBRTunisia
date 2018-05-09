import { Component, AfterViewInit, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImportService } from '../import.service'
import {Observable} from 'rxjs/Observable';
import { Document } from '../../Model/Doc';
import { DataDocServiceService } from '../data-doc-service.service';

declare var $: any;
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']

})

export class DocumentComponent implements OnInit  {
 /* ngAfterViewInit() {
    $.getScript('assets/datagrid.js', function() {

    });
    $.getScript('assets/essaie.js', function() {

    });
  }
 */
 //Component properties
 allDocuments :any[];
 Documents :Array<any> = [];
coddoc1:any;
 statusCode: number;
 requestProcessing = false;
 CodedocToUpdate = null;
 processValidation = false;
 fileUploads: Observable<any[]>
 //Create form
 articleForm = new FormGroup({
     Designation: new FormControl('', Validators.required),
     Date_upload: new FormControl('', Validators.required)	   
 });
 //Create constructor to get service instance
 constructor(public DataDocServiceService: DataDocServiceService , private ImportService : ImportService) {
 }
 //Create ngOnInit() and and load articles
 ngOnInit(): void {
  this.getAllDocuments();
  let Documents = [];
  this.Documents.length = 0 ;
  
  for(let i = 0,l = this.allDocuments.length; i < l; i++) {
   
    let doc:Document = {
    codedoc:this.allDocuments[i]["codedoc"],
    designation:this.allDocuments[i]["designation"],
    date_upload:this.allDocuments[i]["date_upload"],
    pathfile:this.allDocuments[i]["pathfile"]

    };

     
    this.Documents.push(doc);
  
  } 

  
};  

chargerFichier(){
  this.fileUploads = this.ImportService.getFiles();
}



 //Fetch all articles
 getAllDocuments() {
  this.vidertab(this.allDocuments);
      this.DataDocServiceService.getAllDocuments()
    .subscribe(
              data => this.allDocuments = data,
              errorCode =>  this.statusCode = errorCode); 
              

              

            }
 //Handle create and update article
/* onDocFormSubmit() {
  this.processValidation = true;   
  if (this.articleForm.invalid) {
       return; //Validation failed, exit from method.
  }   
  //Form is valid, now perform create or update
  else  this.preProcessConfigurations();
  let Designation = this.articleForm.get('Designation').value.trim();
    let Date_upload = this.articleForm.get('Date_upload').value.trim();
    let DocFile = this.articleForm.get('file').value.trim();	  
  if (this.CodedocToUpdate === null) {  
    //Handle create article
    let article= new Document(null, Designation, Date_upload, DocFile);	  
    this.DataDocServiceService.createDocument(article)
      .subscribe(successCode => {
              this.statusCode = successCode;
          this.getAllDocuments();	
        this.backToCreateDocument();
        },
          errorCode => this.statusCode = errorCode);
  } else {  
       //Handle update article
    let article= new Document(this.CodedocToUpdate, Designation, Date_upload,DocFile);	  
    this.DataDocServiceService.updateDocument(article)
      .subscribe(successCode => {
              this.statusCode = successCode;
          this.getAllDocuments();	
        this.backToCreateDocument();
        },
          errorCode => this.statusCode = errorCode);	  
  }
 }*/



 //Load article by id to edit
 loadDocumentToEdit(Codedoc: string) {
    this.preProcessConfigurations();
    this.DataDocServiceService.getDocumentById(Codedoc)
      .subscribe(Doc => {
              this.CodedocToUpdate = Doc.codedoc;   
              this.articleForm.setValue({ Designation: Doc.designation, Date_upload: Doc.date_upload, DocFile: Doc.pathfile });
        this.processValidation = true;
        this.requestProcessing = false;   
          },
          errorCode =>  this.statusCode = errorCode);
 }
 //Delete article
 deleteDocument(Codedoc: string) {
    this.preProcessConfigurations();
    this.DataDocServiceService.deleteDocumentById(Codedoc)
      .subscribe(successCode => {
              this.statusCode = successCode;
          this.getAllDocuments();	
          this.backToCreateDocument();
        },
          errorCode => this.statusCode = errorCode);    
 }
 //Perform preliminary processing configurations
 preProcessConfigurations() {
    this.statusCode = null;
  this.requestProcessing = true;   
 }
 //Go back from update to create
 backToCreateDocument() {
    this.CodedocToUpdate = null;
    this.articleForm.reset();	  
  this.processValidation = false;
 }

vidertab(Documents = []){
  this.Documents.length = 0
}
}
  

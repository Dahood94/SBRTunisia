
import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import { Document } from '../../Model/doc';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Http, Response, Headers, URLSearchParams, RequestOptions, } from '@angular/http';
import { ImportService } from '../import.service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Document } from '../../Model/doc';
import { DataDocServiceService } from '../data-doc-service.service';

@Injectable()
@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})



export class ImportComponent {


  selectedFiles: FileList
  currentFileUpload: File
  progress: { percentage: number } = { percentage: 0 }
selectedFile= null;
  statusCode: number;
  requestProcessing = false;
  CodedocToUpdate = null;
  processValidation = false;

  form: FormGroup;
  loading: boolean = false;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, public DataDocServiceService: DataDocServiceService, public ImportService: ImportService, private http:Http) {
    this.createForm();
  }

  
 
  

  createForm() {
    this.form = this.fb.group({
      Designation: ['', Validators.required],
      avatar: null,
      dateupload: [Date.now, Validators.required]
    });
  }

  

  
  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(file)
this.selectedFile = file;
        }
      }
    }
  

   //changing for the file
   
  private prepareSave(): any {
    let input = new FormData();
   
    
    return input;
  }

//zaaaaaaaaaaaaaaaaaaaaaaaaaaaa


/*
onDocFormSubmit() {
  this.processValidation = true;   
  if (this.form.invalid) {
       return; //Validation failed, exit from method.
  }   
  //Form is valid, now perform create or update
  else  this.preProcessConfigurations();
  let Designation = this.form.get('Designation').value.trim();
    let Date_upload = this.form.get('Date_upload').value.trim();
    let DocFile: File = this.form.get('file').value.trim();	  
  if (this.CodedocToUpdate === null) {  
    //Handle create article
    let article= new Document(null, Designation, Date_upload, DocFile);	  
    this.DataDocServiceService.createDocument(article)
      .subscribe(successCode => {
              this.statusCode = successCode;
              this.clearFile();
        },
          errorCode => this.statusCode = errorCode);
  } else {  
       //Handle update article
    let article= new Document(this.CodedocToUpdate, Designation, Date_upload,DocFile);	  
    this.DataDocServiceService.updateDocument(article)
      .subscribe(successCode => {
              this.statusCode = successCode;
          this.clearFile();
        },
          errorCode => this.statusCode = errorCode);	  
  }
 }




*/







  //azzzzzzzzzzzzzzzzzzzzzzzzzzz
  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
   
    this.processValidation = true;   
    if (this.form.invalid) {
         return; //Validation failed, exit from method.
    }   
    //Form is valid, now perform create or update
    
    else  this.preProcessConfigurations();
      let Designation = this.form.get('Designation').value.trim();
      let Date_upload = this.form.get('dateupload').value.trim();
      console.log(Designation)
      let DocFile : File = this.selectedFile;




      Date_upload= Date.now();
      console.log(Date_upload);
   console.log(DocFile)
  /* yekhdem bel conversion l string 
      let code64 = this.form.get('avatar').value;
      code64 = JSON.stringify(code64);
      console.log('code 64 = ' +code64);
      let code65 = window.btoa(code64);
      console.log('code 64 = ' +code65);
      let DocFile = code64;  
  
  */
 
  //njareb bel backend_____________________________

      
console.log(DocFile.name)
console.log(DocFile.webkitRelativePath)

//_________

//________

  //________________________________________________

    if (this.CodedocToUpdate === null) {  
      //Handle create article
      let article= new Document(null, Designation, Date_upload, 'http://localhost:8088/api/files/'+DocFile.name);	 
      this.DataDocServiceService.createDocument(article)
        .subscribe(successCode => {
                this.statusCode = successCode;
                this.clearFile();
        })
          
         
    
    /*
           
            const Gofile =new FormData;
               Gofile.append( null ,DocFile , DocFile.name);
               console.log(Gofile);

               this.http.post('http://localhost:8088/api/a',Gofile)
               .subscribe(
               Response=>{
                alert(Response.json().response);
                    console.log(Response.json());
                
            
               },err=>{alert("upload failed");
              
              }
              )
             
    
    */
             }
             
  else {  
         //Handle update article
      let article= new Document(this.CodedocToUpdate, Designation, Date_upload,DocFile.name);	  
      this.DataDocServiceService.updateDocument(article)
        .subscribe(successCode => {
                this.statusCode = successCode;
            this.clearFile();
          },
            errorCode => this.statusCode = errorCode);	  
    }
   
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      
      this.loading = false;
    }, 1000);}

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
  preProcessConfigurations() {
    this.statusCode = null;
  this.requestProcessing = true;   
 }
 //Go back from update to create
 backToCreateDocument() {
    this.CodedocToUpdate = null;
    this.form.reset();	  
  this.processValidation = false;
 }

 selectFile(event) {
  this.selectedFiles = event.target.files;
}

upload() {
  this.progress.percentage = 0;

  this.currentFileUpload = this.selectedFiles.item(0)
  this.ImportService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
    if (event.type === HttpEventType.UploadProgress) {
      this.progress.percentage = Math.round(100 * event.loaded / event.total);
    } else if (event instanceof HttpResponse) {
      console.log('File is completely uploaded!');
    }
  })

  this.selectedFiles = undefined
}
vider() {
  this.form.get('Designation').setValue('');
}

}
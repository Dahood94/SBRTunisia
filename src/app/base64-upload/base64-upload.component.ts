
import {Component, OnInit, Input} from '@angular/core';
@Component({
  selector: 'base64-upload',
  templateUrl: './base64-upload.component.html'
})
export class Base64UploadComponent {
   //details upload
   @Input() fileUpload: string;
 
   constructor() {}
  
   ngOnInit() {
   }
  
 }
import { Component, OnInit } from '@angular/core';
import { ImportService } from '../import.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AaComponent implements OnInit {
//list uploads
 
showFile = false
fileUploads: Observable<string[]>

constructor(private ImportService : ImportService) {}

ngOnInit() {
}

showFiles(enable: boolean) {
  this.showFile = enable

  if (enable) {
    this.fileUploads = this.ImportService.getFiles();
  }
}
}
import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashbanquerecep',
  templateUrl: './dashbanquerecep.component.html',
  styleUrls: ['./dashbanquerecep.component.css']
})
export class DashbanquerecepComponent implements AfterViewInit {

  constructor() { }

  
  ngAfterViewInit() {
    $.getScript('assets/datagrid.js', function() {

    });
    $.getScript('assets/essaie.js', function() {

    });
  }


}

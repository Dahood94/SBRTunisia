import { Component, AfterViewInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $.getScript('assets/datagrid.js', function() {

    });
  }

}

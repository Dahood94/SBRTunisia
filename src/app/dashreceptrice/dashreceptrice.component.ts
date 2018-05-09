import { Component, AfterViewInit } from '@angular/core';
declare var $: any ;
@Component({
  selector: 'app-dashreceptrice',
  templateUrl: './dashreceptrice.component.html',
  styleUrls: ['./dashreceptrice.component.css']
})
export class DashreceptriceComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $.getScript('assets/datagrid.js', function() {

    });
    $.getScript('assets/essaie.js', function() {

    });
  }

}

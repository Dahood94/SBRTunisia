import { Component,  AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashemetrice',
  templateUrl: './dashemetrice.component.html',
  styleUrls: ['./dashemetrice.component.css']
})
export class DashemetriceComponent implements  AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $.getScript('assets/essaie.js', function() {

    });
    $.getScript('assets/jquery.min.js', function() {

    });
    $.getScript('assets/todo.js', function() {

    });

  }

}

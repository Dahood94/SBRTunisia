import { Component, AfterViewInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-dashbanqueme',
  templateUrl: './dashbanqueme.component.html',
  styleUrls: ['./dashbanqueme.component.css']
})
export class DashbanquemeComponent implements AfterViewInit {

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

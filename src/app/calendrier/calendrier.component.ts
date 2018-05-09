import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    $.getScript('assets/calend.js', function() {

    })
  }

}

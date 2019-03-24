import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input()backgroundColor = '#d8d8d8';
  @Input()progressColor = '#4CAF50';
  @Input()width = 50;
  constructor() { }

  ngOnInit() {
  }

}

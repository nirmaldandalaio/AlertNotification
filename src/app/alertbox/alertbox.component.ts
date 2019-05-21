import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.sass']
})
export class AlertBoxComponent implements OnInit {
  public showBox: boolean = true;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}

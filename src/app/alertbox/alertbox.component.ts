import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.sass']
})
export class AlertBoxComponent implements OnInit {
  @Input() content: string;
  @Input() alerttype: string;

  constructor() { }

  ngOnInit() {
  }

  public get showAlert(): boolean {
    return this.content ? true : false;
  }

}

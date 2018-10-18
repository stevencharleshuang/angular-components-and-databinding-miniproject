import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // using ViewEncapsulation.None will turn off encapsulation for the component
  // using ViewEncapsulation.Native will use the shadow DOM default behavior
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}

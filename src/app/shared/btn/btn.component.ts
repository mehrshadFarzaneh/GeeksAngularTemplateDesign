import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  @Input() url: string = "#";
  @Input() title: string = "Null String";
  @Input() typeColor: string = "primary";
  @Input() size: string = "normal";
  constructor() { }

  ngOnInit(): void {
  }

}

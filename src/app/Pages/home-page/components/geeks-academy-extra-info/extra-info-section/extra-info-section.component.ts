import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-info-section',
  templateUrl: './extra-info-section.component.html',
  styleUrls: ['./extra-info-section.component.scss']
})
export class ExtraInfoSectionComponent implements OnInit {
  @Input() url: string = "";
  @Input() title: string = "A Title";
  @Input() describe: string = "its about title";
  constructor() { }

  ngOnInit(): void {
  }

}

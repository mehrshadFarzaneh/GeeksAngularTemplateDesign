import { Navigation } from './../../Models/navigation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fakeData: Navigation[] = [
    {
      id: "1", title: "Browse", ul: [{
        id: "2", title: "Web Development", ul: [
          { id: "3", title: "1111 111", ul: [] },
          { id: "4", title: "222 222222", ul: [] },
          { id: "5", title: "33 33333", ul: [] },
        ],
      }, {
        id: "6", title: "Mobile Development", ul: [
          { id: "7", title: "1111 111", ul: [] },
          { id: "8", title: "222 222222", ul: [] },
          { id: "9", title: "33 33333", ul: [] },
          { id: "9", title: "4444 44", ul: [] },
        ],
      },{
        id: "2", title: "IT Software", ul: [],
      }]
    },
   {id:"6",title:"Landing",ul:[{id:"2",title:"Home Academy"}]},
   {id:"7",title:"Pages",ul:[{id:"2",title:"Home Academy"}]},
   {id:"7",title:"Accounts",ul:[{id:"2",title:"Home Academy"}]},
  ];
  mobileMenuIsOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  openUl(baseString:string, indexOfElement:number) {
    // debugger;
    const elementID: string = baseString + indexOfElement;
    const element = document.getElementById(elementID);
    const hasClass = element?.classList.contains("hidden");
    if (hasClass) {
      switch (baseString) {
        case "GenesisNav":
          document.querySelectorAll("ul.dropdown:not(.hidden)")?.forEach(item => {
            item.classList.add("hidden");
          })
          break;
        case "SecondaryNav":
          document.querySelector("ul.dropdown-second:not(.hidden)")?.classList.add("hidden");
          break;
        default:
          break;
      }
      element?.classList.remove("hidden");
    } else {
      element?.classList.add("hidden");
    }

  }
}

import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

  menuNav = [
    {name:"Home",route:"home",icon:"home"},
    {name:"Usuarios",route:"usuario",icon:"person_outline"},
    {name:"Certificados",route:"category",icon:"verified user icon"},
    {name:"CAs",route:"ca",icon:"security icon"},
    
  ]

  constructor(media:MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
   }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width:1200px) {#searchform {display:none}}
    li > a.active { color: #f97924; }
  `]
})

export class NavBarComponent {

}
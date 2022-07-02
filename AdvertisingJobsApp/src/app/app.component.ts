import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Advertising Jobs'

  token = '';

  user = ''

  showMenu=false;

  constructor(private router:Router) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token') || '{}';
    } else {
      this.token = '';
    }

    if (localStorage.getItem('user')) {
      this.user = localStorage.getItem('user') || '{}';
    } else {
      this.token = '';
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    setTimeout(()=>window.location.reload(),50);
  }

  clickMenu() {
    this.showMenu = !this.showMenu;
  }

  
}



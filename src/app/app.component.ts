import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userId = '';
    
    constructor(private router: Router) {}
    
    ngOnInit() {
        if (!this.userId) {
            console.log('there is no userId.');
            // this.router.navigate(['/login']);
        }
    }
}

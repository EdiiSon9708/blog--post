import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  value: any = null

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.value = navigation?.extras?.state

   }

  ngOnInit(): void {
  }

}

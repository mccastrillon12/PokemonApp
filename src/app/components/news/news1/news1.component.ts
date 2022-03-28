import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.css']
})
export class News1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News1Component } from './news1/news1.component';
import { News2Component } from './news2/news2.component';
import { News3Component } from './news3/news3.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  {

  constructor( private dialogRef : MatDialog) { }

openDialog(){
this.dialogRef.open(News1Component)
}
openDialog2(){
  this.dialogRef.open(News2Component)
  }
  openDialog3(){
    this.dialogRef.open(News3Component)
    }


}

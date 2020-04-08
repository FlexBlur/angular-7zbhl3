import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

/*
post: {  
title: string,  
content: string,  
loveIts: number,  
created_at: Date
}
*/

export class PostListItemComponent implements OnInit {

  @Input() titrePubliIT: string;
  @Input() contenuPubliIT: string;
  @Input() datePubliIT: Date;
  @Input() jadorePubliIT: number;
  @Input() jeDetestePubliIT: number;

  @Input() publisIT: Object[];

  constructor() { }

  ngOnInit(): void {
  }

  getTitrePubli() {
    return this.titrePubliIT;
  }

  getContenuPubli() {
    return this.contenuPubliIT;
  }

  getDatePubli() {
    return this.datePubliIT;
  }

  getJadorePubli() {
    return this.jadorePubliIT;
  }

  getJeDetestePubli() {
    return this.jeDetestePubliIT;
  }

  onJadore() {
    this.jadorePubliIT++;
  }

  onJeDeteste() {
    this.jeDetestePubliIT++;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() titrePubliPL: string;
  @Input() contenuPubliPL: string;
  @Input() datePubliPL: Date;
  @Input() jadorePubliPL: number;
  @Input() jeDetestePubliPL: number;

  constructor() { }

  ngOnInit(): void {
  }

}

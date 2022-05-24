import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skeleton-text',
  templateUrl: './skeleton-text.page.html',
  styleUrls: ['./skeleton-text.page.scss'],
})
export class SkeletonTextPage implements OnInit {

  superHeroes: Observable<any>;
  publisher: string = '';

  constructor(private service: DataService) { }

  ngOnInit() {
    this.superHeroes = this.service.getHeroes();
  }

  segmentChanged(ev) {
    console.log(ev);
    
    this.publisher = ev.detail.value;
  }
}

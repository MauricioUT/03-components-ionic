import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

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

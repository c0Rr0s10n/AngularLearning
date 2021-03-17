import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent implements OnInit {
  id: any = 0;
  private subscription: Subscription = new Subscription;
  constructor(
    private route: ActivatedRoute,
    ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.subscription = this.route.params.subscribe(params=>this.id=params['id']);
  }

}

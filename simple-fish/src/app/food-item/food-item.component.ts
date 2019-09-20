import { Component, OnInit, Input } from '@angular/core';
import { FoodItem } from './food-item';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {

  @Input() foodItem: FoodItem;

  constructor() { }

  ngOnInit() {
  }

}

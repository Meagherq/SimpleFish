import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FoodItem } from './food-item/food-item';
import FoodJson from '../assets/food.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    config: any;
    public appetizerArray: FoodItem[] = null;
    classicArray: FoodItem[];
    signatureArray: FoodItem[];
    title = 'simple-fish';

    constructor() {
        this.setupAccordion();
      }

    setupAccordion() {
        const x = FoodJson;
        const tempList: FoodItem[] = [];

        const keys = Object.values(FoodJson.appetizers);
        for (const key of keys) {
          const foodItem: FoodItem = {
            name: key.name,
            description: key.description,
            image: key.image,
            price: key.price,
          };
          tempList.push(foodItem);
          this.appetizerArray = tempList;
        }



        // FoodJson.appetizers.forEach(a => {
        //     const foodItem: FoodItem = {
        //         name: a.name,
        //         description: a.description,
        //         image: a.image,
        //         price: a.price,
        //     };
        //     debugger;
        //     this.appetizerArray.push(foodItem);
        // });
        // this.config.classic.forEach(a => {
        //     const foodItem: FoodItem = {
        //         name: a.name,
        //         description: a.description,
        //         image: a.image,
        //         price: a.price,
        //     };
        //     this.classicArray.push(foodItem);
        // });
        // this.config.signature.forEach(a => {
        //     const foodItem: FoodItem = {
        //         name: a.name,
        //         description: a.description,
        //         image: a.image,
        //         price: a.price,
        //     };
        //     this.signatureArray.push(foodItem);
        // });
    }
  }

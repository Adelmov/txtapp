import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
 selectedRestaurant : string = "chipotle";
 restaurants : string [] = ['chipotle' , 'burger'];
  burgerProducts = [ 
  { imgPath: "https://www.thewholesomedish.com/wp-content/uploads/2019/04/The-Best-Classic-Hamburgers-550-500x500.jpg" , price :12.50 , name : 'burger'}
];
 burgerRestaurant = [
  {imgPath: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg", price : 10.22, name : 'vegetables' }
];

  
  onRestaurantClick() {
    this.router.navigate([ 'view-product']);
  };
  viewProducts = [];
  constructor(private router : Router  ) { }
  ngOnInit() {
    this.viewProducts = this.burgerProducts;
  }
  
  onProductClick() {
   this.router.navigate ([ '/view-product/info-product'])
  };



   searchQuery: string = '';
    items: string[];
  
     initializeItems() {
      this.items = [
  
      ];
    }
     getItems(ev: any) {     
        this.initializeItems();    
        const val = ev.target.value;  
           if (val && val.trim() != '') {   
            this.items = this.items.filter((item) => { 
           return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
       });
       }
 }
 }; 
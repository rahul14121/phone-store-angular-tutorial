import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})

//Defining the product property, which is following the interface defined in Products.ts
//The OnInit interface calls the ngOnInit method for initialization tasks for when the component is created.
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, //This is injecting ActivatedRoute into the constructor, which provides data about the route, such as params and other data in the URL.
    private cartService: CartService 
  ) {}


  addToCart(product: Product) { //Adds the product to the cart, in which the product is following the interface definition
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    //Firstly, we are getting the product ID from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Now, we are finding the product that corresponds with the ID provided in the route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}

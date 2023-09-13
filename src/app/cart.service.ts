import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = []; //Defining a property to store the array of current items in the cart, which follows the Product interface.
  constructor(private http: HttpClient) {}

  //appends a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //collects the items users add to the cart, and returns the item + quantity
  getItems() {
    return this.items;
  }

  //returns an empty array of items
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]> ('/assets/shipping.json');
  }
}

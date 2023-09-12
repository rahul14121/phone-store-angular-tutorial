import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

// The component decorator indicates that the following class is a component, and this @Component() provides metadata about said components such as the selector, templates and styleUrls.
@Component({
  selector: 'app-product-alerts', //Identifies the component. The convention is for Angular component selectors to begin with the 'app-' prefix, followed by the component name.
  templateUrl: './product-alerts.component.html', //References the HTML
  styleUrls: ['./product-alerts.component.css'] // References the CSS
})
export class ProductAlertsComponent {
 @Input() product: Product | undefined; // This decorator indicates that the property value passes in from the parent component - ProductListComponent
 @Output() notify = new EventEmitter(); // This decorator allows the ProductAlertsComponent to emit an event when the value of the notify property changes.
 
}

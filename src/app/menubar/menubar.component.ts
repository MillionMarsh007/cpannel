import { Component, Output, EventEmitter } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-menubar',
  imports: [DashboardComponent],
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
  animations: [ trigger('transitionMessages', [ state('void', style({ opacity: 0 })), transition(':enter, :leave', [ animate(300) ]) ]) ]
})
export class MenubarComponent {
  ELEMENT_DATA = ELEMENT_DATA;
  @Output() categorySelected = new EventEmitter<string>();
  filterByCategory(category: string) {
    debugger;
     this.categorySelected.emit(category);
    }
}

export interface Element {
  productname: string;
  position: number;
  description: string;
  Price: number;
  category: string;
  ImageId: number;
  isDelete: boolean;
}

export const ELEMENT_DATA: Element[] = [
  {position: 1, productname: 'Hydrogen', description: "Hello", Price: 100, category: 'pipes', ImageId: 1, isDelete: false},
  {position: 2, productname: 'Helium', description: "Hello", Price: 200, category: 'wood', ImageId: 1, isDelete: false},
];

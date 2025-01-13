import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {SelectionModel} from '@angular/cdk/collections';
import { MatCheckboxModule } from'@angular/material/checkbox';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { iProducts,iCategory } from '../i-products';


@Component({
  selector: 'app-dashboard',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations: [ trigger('transitionMessages', [ state('void', style({ opacity: 0 })), transition(':enter, :leave', [ animate(300) ]) ]) ]
})
export class DashboardComponent {
  displayedColumns: string[] = ['select', 'position', 'productname', 'description', 'Price', 'ImageId'];
  allProducts!:iProducts[]; 
  allCategory!:iCategory[];
  dataSource!: MatTableDataSource<iProducts>;  // This will be the data source for MatTable
  selection = new SelectionModel<iProducts>(true, []); 
  selectedCategory!: number; 
  ngOnInit(){ 
    //this.initdata = [...new Set(ELEMENT_DATA.map(item => item.category))];
    this.allProducts = [
      {position: 1, productname: 'Chair', description: "Armed", Price: 100, categoryId: 1, ImageId: 1, isDelete: false},
      {position: 2, productname: 'Rod', description: "Thickness 8mm", Price: 200, categoryId: 2, ImageId: 1, isDelete: false},
      {position: 4, productname: 'Rod1', description: "Thickness 10mm", Price: 200, categoryId: 2, ImageId: 1, isDelete: false},
      {position: 5, productname: 'Rod2', description: "Thickness 12mm", Price: 200, categoryId: 2, ImageId: 1, isDelete: false},
      {position: 1, productname: 'Chair', description: "Arm less", Price: 100, categoryId: 1, ImageId: 1, isDelete: false},
    ];
    this.allCategory = [
      {categoryId: 1, category:'Wood'},
      {categoryId: 2, category:'Steel'},
    ]
    this.dataSource = new MatTableDataSource(this.allProducts);
  }

  filterByCategory(category: number) { 
    debugger;
    this.selectedCategory = category
    if (category) { 
      this.dataSource.data = this.allProducts.filter(element => element.categoryId === category);
     } else {
       this.dataSource.data = this.allProducts; } 
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewProduct(){
    
  }
  
}



import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";


@Component({
  selector: 'app-menubar',
  imports: [DashboardComponent],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

}

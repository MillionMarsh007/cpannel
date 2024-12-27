import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MenubarComponent } from "./menubar/menubar.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [MenubarComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cpannel';
}

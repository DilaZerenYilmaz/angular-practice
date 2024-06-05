import { Component } from '@angular/core';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'app-root',

  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, LoadingComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {}


import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeroComponent } from './core/components/hero/hero.component';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { ScreenSizeSignal } from './signals/screen-size-signal';
import { SideBarSignal } from './signals/sidebar-signal';
import { ScreenSizeDirective } from './shared/directives/screen-size.directive';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet , HeaderComponent, FooterComponent, ScreenSizeDirective,
    MatSidenavModule, MatButtonModule, MatSidenav, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecommerce-App';
  
  screenSignal = inject(ScreenSizeSignal);
  sidebarSignal = inject(SideBarSignal);
  showFiller = false;
  currentScreen = '';

  //Child element in the app html we want to access 
  @ViewChild('sidenav') sidenav!: MatSidenav;


  //changes the sidenavbar signal from on to off
  toggle(){
    this.sidenav.toggle();
    this.sidebarSignal.sidebarOpen.update(val => !val)
    console.log("SideBar Signal Value: "+ this.sidebarSignal.sidebarOpen())
  }

  computeSize(size: string) {
    this.currentScreen = size;
  }


}

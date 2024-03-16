import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideBarSignal } from '../../../signals/sidebar-signal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  // AUTOWIRE
  // sSignal from the sideBar Signal 
  // Set to readonly so we dont acciendital alter its value
  public readonly sidebarSignal = inject(SideBarSignal);
  
  

  toggleSideNavSignal() {
    //We are using the signals built in method 'update' to change the signal once the butto is pressed in the view
    //Flips the boolean from 'On' to 'Off'
    this.sidebarSignal.sidebarOpen.update(val => !val);
    console.log("SideBar Signal Value: "+ this.sidebarSignal.sidebarOpen())
  }


}

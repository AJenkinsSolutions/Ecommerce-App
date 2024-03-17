import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideBarSignal } from '../../../signals/sidebar-signal';
import { seletctCartProducts } from '../../../ngrx/selectors/cart.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../../ngrx/state/app.state';
import { Observable } from 'rxjs';
import { IProduct } from '../../../models/product.interface';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, AsyncPipe, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {


  products$: Observable<IProduct[]>;
 

  //Initalize our Global store
  constructor(private store: Store<AppState>, public router: Router){
    //Now we can initalize the count$ from the store
   

    this.products$ = this.store.select(seletctCartProducts)
  }


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

  navigateToCart(){

    this.router.navigate(['/cart']);
    console.log("Navigate to cart");

  }


}

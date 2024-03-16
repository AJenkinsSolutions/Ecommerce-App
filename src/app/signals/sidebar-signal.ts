import {Injectable, signal} from '@angular/core'

@Injectable({
    providedIn: 'root'
})
//This value determines if the sidebar is open or closed.
export class SideBarSignal{

    // How the headerComponent interacts with this component
    // The Header component will update this signal from on to off if the burger menu icon is clicked


    //Initial value false
    sidebarOpen = signal(false);

}
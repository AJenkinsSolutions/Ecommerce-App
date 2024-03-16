import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

//This class will hold the signal for the current screen size
export class ScreenSizeSignal {
    
    currentScreenSize = signal('');
} 
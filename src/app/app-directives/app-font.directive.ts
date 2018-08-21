import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from "@angular/core";

@Directive({//Decorator
    selector: '[appFontDirective]' // This needs a square brackets here
})

//Directive can implement only ngOnInit and ngOnDestroy as it does not have any view
export class BasicFontDirective implements OnInit, OnDestroy { 
    // Inject Renderer2 and ElementRef
    constructor(private elementRef: ElementRef , private renderer: Renderer2) { 
        
    }

    ngOnInit() {
        //this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.renderer.setStyle(this.elementRef.nativeElement,'font-size','19px'); // set style usin gthe Renderer
        this.renderer.setStyle(this.elementRef.nativeElement,'color','steelblue');
    }

    ngOnDestroy() {

    }


}
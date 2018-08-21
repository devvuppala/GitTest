import { Directive, ElementRef, OnInit, OnDestroy, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({//Decorator
    selector: '[appCurrencyDirective]' // This needs a square brackets here
})

//Directive can implement only ngOnInit and ngOnDestroy as it does not have any view
export class CurrencyDirective implements OnInit, OnDestroy { 
    @HostBinding("style.border") elementBorder; // Host Binding is binding the property of the element
    @HostBinding("hidden") hiddenErrorMessage;
    @HostBinding("title") titleMessage;
    @HostBinding("style.color") colorOfInput;

    @Input() validationFailureColor: string = 'red';
    @Input() validationSuccessColor: string = 'green';
   
    // Inject Renderer2 and ElementRef
    constructor(private elementRef: ElementRef , private renderer: Renderer2) { 
        
    }

    @HostListener('input') onInput(event:KeyboardEvent) { // Hostlistner needs to listen to the element
        let value = this.elementRef.nativeElement.value;
        if(value <= 9) {
            this.elementBorder = '1px solid red';
            this.titleMessage = "Price should be greater that 9";
            this.colorOfInput = this.validationFailureColor;
        } else {
            this.elementBorder = '';
            this.titleMessage = "";
            this.colorOfInput = this.validationSuccessColor;
        }
        this.elementRef.nativeElement.value = value;
}

    ngOnInit() {
        
    }

    ngOnDestroy() {

    }


}
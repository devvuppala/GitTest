import { Directive , Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: '[notNgIf]'
})

export class NotNgIfDirective {

    //Get the dynamic condition
    @Input() set notNgIf(booleanValue: boolean) { // When ever an input param changes , we need to execute a method
        if(booleanValue) {
            this.viewContainerRef.clear();
        } else {
            //Display something which is between this directive tag
            //We have to create a view to show that
            this.viewContainerRef.createEmbeddedView(this.viewTemplate);
        }
    } 
    //We need to get access to the template in which this is used & where should we render it
    constructor(private viewTemplate: TemplateRef<any> , private viewContainerRef: ViewContainerRef) {

    }
}
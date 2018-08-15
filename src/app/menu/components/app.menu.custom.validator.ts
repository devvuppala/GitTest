import { Validator, ValidatorFn, FormControl, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector:'[menuPriceValidation]',
    providers: [{
        provide: NG_VALIDATORS, // This is called Opique token, contains list of all validators including angulkar default validator
        multi: true , //This to let angular to add this custom validator to the list
        useExisting: MenuPriceValidator
    }]
})
export class MenuPriceValidator implements Validator {

  validate(control: FormControl): {[key: string] : boolean} {
    return control.value > 9 ? null : {'priceValidationError': true}
  }
}

import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name:'discountPipe',
    pure: true
})
export class priceCurrencyPipe implements PipeTransform {
    transform(value: number, discountPercentage: number) {
        let discountPrice = value * (discountPercentage / 100)
        return value - discountPrice;
    }
}
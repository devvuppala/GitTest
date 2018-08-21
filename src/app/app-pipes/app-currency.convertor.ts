import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'currencyConvertor'
})

export class MyCurrencyConvertor implements PipeTransform {

    transform(value: number , currency_in: string , currency_out : string) {
        if(currency_in == 'usd' && currency_out == 'INR') {
            return value * this.usd_inr_con + 'INR';
        } else  if(currency_in == 'usd' && currency_out == 'cad') {
            return value * this.cad_inr_con + 'INR';
        } else {
            return '$ ' + value;
        }
    }


    usd = 'usd';
    cad = 'cad';
    inr = 'INR';

    cad_inr_con = 50;
    usd_inr_con = 70;
}
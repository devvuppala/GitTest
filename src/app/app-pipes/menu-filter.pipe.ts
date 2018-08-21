import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'menuFilterPipe',
    pure: true
})


export class MenuFilterPipe implements PipeTransform {

    transform(value: any , filterString: string, propertyName: string) {
        console.log(filterString);
        if(filterString == '') {
            return value;
        } else {
            if(value != null && value.length == 0) {
                return value;
            }
    
            const resulArray = [];
            for(let item of value) {
                let propertyValue:string = item[propertyName];
                if(propertyValue.toLowerCase().includes(filterString.toLowerCase())) {
                    resulArray.push(item);
                }
            }
            return resulArray;
        }
        
    }
}
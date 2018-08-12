export interface MenuItem {
    $key: string,
    id : number,
    name : string,
    description: string,
    price : number,
    spiceLevel: string,
    imageLocation: string,
    ingredients: string
  }




export enum SpiceLevel {
    HIGH = 1,
    MEDIUM,
    LOW
}
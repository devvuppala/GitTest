export interface MenuItem {
    itemID : number,
    itemName : string,
    itemPrice : number,
    spiceLevel: SpiceLevel
}


export enum SpiceLevel {
    HIGH = 1,
    MEDIUM,
    LOW
}
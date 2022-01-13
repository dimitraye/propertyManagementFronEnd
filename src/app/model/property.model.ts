import { NumberValueAccessor } from "@angular/forms";

export class Property {
    id! : number;
    city! : string;
    price! : number;
    notaryFees! : number;
    surface! : number;
    renovation! : number;
    rent! : number
    description! : string;
    constructor() {}
}
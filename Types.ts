export enum Weapon {GUN, BAYONET, KNIFE}

export type Guard= {
    id: string;
    name:string;
    aadhar: string;
    weapon: Weapon.BAYONET|Weapon.GUN|Weapon.KNIFE;

}

export type Visitor={
    name:string;
    mobile:string;
    aadhar: string;
}

export type Caller={
    name:string;
    mobile:string;
    address: string;
}

export type Receptionist={
    id: string;
    name:string;
    aadhar: string;
    mobile: string;
}

export type Doctor ={
registrationNumber: string;
}

export type RestRoom = {
    floor: number;
    cleanerIds: string[];
}

export type Lounge = {
    floor : number;
    capacity: number;
}

export type ICU = {
    careType: string;
}

export type MedicalEquipment= {
    suppliers : Supplier[];
    equipmentState: EquipmentState;
    }

export type Supplier= {
    id: string;
    company: string;
}    

export type EquipmentState={
    currentQuantity: number;
    newQuantity: number;
    damagedQuantity: number;
}

export type Room = {
    chairs : number;
    tables: number;
    beds: number;
    rentPerDay: number;
}

export type IPWard={
    beds: number;
    rentPerDay: number;
}
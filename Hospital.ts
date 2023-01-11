import { Floor } from "./Floor";
import {ICU, IPWard, MedicalEquipment, Room, Guard} from './Types';

export interface Hospital
{
    floors: number;

    floorDetails: Floor[];

    icu :ICU;

    ipWard: IPWard;

    medicalEquipment: MedicalEquipment;

    rooms: Room[];

    guard: Guard;
}
import {Receptionist, Visitor, Caller} from './Types';
export interface Reception
{
    receptionist: Receptionist;
    allotSlotsTo(visitors: Visitor[]): boolean;
    logCallsFrom(callers: Caller[]): boolean;

}
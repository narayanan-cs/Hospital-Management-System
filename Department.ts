import { Reception } from "./Reception";
import { OperationTheatre } from "./OperationTheatre";
import { EmergencyWard } from "./EmergencyWard";
export interface Department
{
    reception: Reception;

    operationTheatre: OperationTheatre;

    EmergencyWard:  EmergencyWard;

    floor : number;


}
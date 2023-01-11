import { Doctor } from "./Types";

export interface EmergencyWard
{
    admissionDate: Date;
    causeOfAdmission:string;
    isPoliceCase: boolean;
    bedNumber: number;
    doctorAttending: Doctor;
}
import { Doctor } from "./Types";
export interface OperationTheatre{
    duration: string;

    operationType: string;

    doctorsInvolved: Doctor[];
}
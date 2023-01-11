import { Department } from "./Department";
import { RestRoom } from "./Types";
import { Lounge } from "./Types";

export interface Floor {

    departments: Department[];

    restRooms: RestRoom[];

    lounge: Lounge;
}
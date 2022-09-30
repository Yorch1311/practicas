import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { IPassenger } from "src/common/interfaces/passenger.interfaace";

export class FlightDTO {
    @IsString()
    @IsNotEmpty()
    pilot: string;
    @IsString()
    @IsNotEmpty()
    airplane: string;
    @IsString()
    @IsNotEmpty()
    destinationCity: string;
    @IsDate()
    @IsNotEmpty()
    @Type(()=>Date)
    flightDate: Date;
    passenger?: IPassenger[];
}
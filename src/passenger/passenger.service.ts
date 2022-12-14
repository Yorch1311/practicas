import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interfaace';
import { PASSENGER } from 'src/common/models/models';
import { PassengerDTO } from './dto/passenger.dto';

@Injectable()
export class PassengerService {

    constructor(@InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>){}

    async create(passengerDTO: PassengerDTO): Promise<IPassenger>{

        const newPassenger = new this.model({
            ...passengerDTO,
        });
        return await newPassenger.save();
    }

    async findAll(): Promise<IPassenger[]>{
        return await this.model.find();
    }

    async findOne(id: string): Promise<IPassenger>{
        return await this.model.findById(id);
    }

    async update(id: string, passengerDTO: PassengerDTO): Promise<IPassenger>{

        const passenger = await this.model.findById(id);

        if(passenger){

            return await this.model.findByIdAndUpdate( id, passengerDTO); 
        }else{
            throw new HttpException("El usuario no existe", HttpStatus.BAD_REQUEST);
        }
    }

    async delete(id: string): Promise<IPassenger>{
        return await this.model.findByIdAndRemove(id);
    }
}

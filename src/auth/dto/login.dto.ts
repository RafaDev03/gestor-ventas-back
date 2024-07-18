import {Transform} from "class-transformer"
import {IsString, MinLength} from "class-validator"


export class loginDto{
    logiUsua: string;

    @Transform(({value})=> value.trim())
    @IsString()
    @MinLength(2)
    passUsua: string;
}
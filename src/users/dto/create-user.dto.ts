
import { IsOptional, IsString,  IsEmail,   MinLength, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
 
export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;   


    @ApiProperty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;

}


// export class UploadFileDto {

//     @ApiProperty()
    
// }

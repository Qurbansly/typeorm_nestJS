import { IsNotEmpty, IsString, IsDefined, IsDate } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  prodCountry: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  prodDate: string;
}

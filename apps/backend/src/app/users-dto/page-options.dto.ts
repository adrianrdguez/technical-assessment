import { IsInt, Min } from 'class-validator';

export class PageOptionsDto {
  @IsInt()
  @Min(0)
  page: number;

  @IsInt()
  @Min(1)
  limit: number;
}

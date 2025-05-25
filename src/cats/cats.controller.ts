import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<string> {
        return 'This action adds a new cat';
    }

    @Get('wiki')
    @Redirect('https://es.wikipedia.org/wiki/Felis_silvestris_catus')
    wikipedia() { }

    @Get()
    findAll(@Query('age') age: number, @Query('breed') breed: string): string {
        return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a cat with ID ${id}`;	
    }
}

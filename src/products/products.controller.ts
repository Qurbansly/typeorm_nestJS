import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/create')
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get/:name')
  async getByName(@Param('name') name: string) {
    try {
      return await this.productsService.getByName(name);
    } catch (error) {
      throw error;
    }
  }

  @Get('/get-all')
  async getAllData() {
    try {
      return await this.productsService.getAllData();
    } catch (error) {
      throw error;
    }
  }

  @Patch('/update/:productId')
  async updateDataById(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      return await this.productsService.updateDataById(
        productId,
        updateProductDto,
      );
    } catch (error) {
      throw error;
    }
  }
}

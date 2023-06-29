import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(product: CreateProductDto): Promise<Product> {
    try {
      const createdProduct = await this.productRepository.save(product);
      return createdProduct;
    } catch (error) {
      throw error;
    }
  }

  async getByName(name: string) {
    try {
      const data = await this.productRepository.find({
        where: { name: name },
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAllData() {
    try {
      const data = await this.productRepository.find();
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateDataById(id: string, updatedData: UpdateProductDto) {
    try {
      const data = await this.productRepository.update(
        {
          productId: id,
        },
        updatedData,
      );

      return data;
    } catch (error) {
      throw error;
    }
  }
}

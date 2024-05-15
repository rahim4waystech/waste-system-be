import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Crud, CrudController, Feature } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Crud({
    model: {
      type: Product,
    },
    query: {
        join: {
          unit : {
            eager: true
          },
        }
      }
  })
  @Feature('product')
  @Controller('product')
export class ProductController implements CrudController<Product>{

    constructor(public service: ProductService) {}

}

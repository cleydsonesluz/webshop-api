import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async listAll() {
    return this.productService.listAll();
  }
}

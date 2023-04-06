import { Module } from "@nestjs/common";
import { ProductController } from "./products.contorller";
import { ProductService } from "./products.service";

@Module({
    controllers: [ProductController],
    providers: [ProductService]
})

export class ProductModule {

}
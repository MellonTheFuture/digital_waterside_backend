import { Controller, Get } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
    constructor(private readonly service: OrdersService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

import { Controller, Get } from "@nestjs/common";
import { InventoryService } from "./inventory.service";

@Controller("inventory")
export class InventoryController {
    constructor(private readonly service: InventoryService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

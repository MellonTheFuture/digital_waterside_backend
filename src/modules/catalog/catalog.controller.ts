import { Controller, Get } from "@nestjs/common";
import { CatalogService } from "./catalog.service";

@Controller("catalog")
export class CatalogController {
    constructor(private readonly service: CatalogService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

import { Controller, Get } from "@nestjs/common";
import { BusinessesService } from "./businesses.service";

@Controller("businesses")
export class BusinessesController {
    constructor(private readonly service: BusinessesService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

import { Controller, Get } from "@nestjs/common";
import { FinanceService } from "./finance.service";

@Controller("finance")
export class FinanceController {
    constructor(private readonly service: FinanceService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

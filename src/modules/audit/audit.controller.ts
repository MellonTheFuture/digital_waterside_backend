import { Controller, Get } from "@nestjs/common";
import { AuditService } from "./audit.service";

@Controller("audit")
export class AuditController {
    constructor(private readonly service: AuditService) { }

    @Get()
    status() {
        return this.service.status();
    }
}

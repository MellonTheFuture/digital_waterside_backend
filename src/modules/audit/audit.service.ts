import { Injectable } from "@nestjs/common";

@Injectable()
export class AuditService {
    status() {
        return { module: "audit", status: "not implemented" };
    }
}

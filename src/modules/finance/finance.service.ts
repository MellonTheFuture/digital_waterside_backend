import { Injectable } from "@nestjs/common";

@Injectable()
export class FinanceService {
    status() {
        return { module: "finance", status: "not implemented" };
    }
}

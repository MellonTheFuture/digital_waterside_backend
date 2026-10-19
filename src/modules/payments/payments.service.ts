import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentsService {
    status() {
        return { module: "payments", status: "not implemented" };
    }
}

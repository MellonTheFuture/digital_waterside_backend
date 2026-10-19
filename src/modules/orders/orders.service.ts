import { Injectable } from "@nestjs/common";

@Injectable()
export class OrdersService {
    status() {
        return { module: "orders", status: "not implemented" };
    }
}

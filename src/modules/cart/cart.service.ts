import { Injectable } from "@nestjs/common";

@Injectable()
export class CartService {
    status() {
        return { module: "cart", status: "not implemented" };
    }
}

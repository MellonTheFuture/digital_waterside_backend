import { Injectable } from "@nestjs/common";

@Injectable()
export class InventoryService {
    status() {
        return { module: "inventory", status: "not implemented" };
    }
}

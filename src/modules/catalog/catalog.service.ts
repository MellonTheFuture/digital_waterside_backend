import { Injectable } from "@nestjs/common";

@Injectable()
export class CatalogService {
    status() {
        return { module: "catalog", status: "not implemented" };
    }
}

import { Injectable } from "@nestjs/common";

@Injectable()
export class BusinessesService {
    status() {
        return { module: "businesses", status: "not implemented" };
    }
}

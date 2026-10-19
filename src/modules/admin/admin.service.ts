import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
    status() {
        return { module: "admin", status: "not implemented" };
    }
}

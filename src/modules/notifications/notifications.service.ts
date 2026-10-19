import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
    status() {
        return { module: "notifications", status: "not implemented" };
    }
}

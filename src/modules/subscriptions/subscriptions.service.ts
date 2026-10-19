import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriptionsService {
    status() {
        return { module: "subscriptions", status: "not implemented" };
    }
}

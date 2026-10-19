import { Module } from "@nestjs/common";
import { HealthController } from "./common/health.controller";
import { PrismaModule } from "./prisma/prisma.module";
import { AdminModule } from "./modules/admin/admin.module";
import { AuditModule } from "./modules/audit/audit.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BusinessesModule } from "./modules/businesses/businesses.module";
import { CartModule } from "./modules/cart/cart.module";
import { CatalogModule } from "./modules/catalog/catalog.module";
import { FinanceModule } from "./modules/finance/finance.module";
import { InventoryModule } from "./modules/inventory/inventory.module";
import { NotificationsModule } from "./modules/notifications/notifications.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { PaymentsModule } from "./modules/payments/payments.module";
import { SubscriptionsModule } from "./modules/subscriptions/subscriptions.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        UsersModule,
        BusinessesModule,
        SubscriptionsModule,
        CatalogModule,
        InventoryModule,
        CartModule,
        OrdersModule,
        PaymentsModule,
        FinanceModule,
        AdminModule,
        NotificationsModule,
        AuditModule,
    ],
    controllers: [HealthController],
})
export class AppModule { }

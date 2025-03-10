import { ProductOrder } from '../models/product-order';

export class ProductOrderRepo {
    static async makeOne(productId: string, username: string, count: number) {
        return ProductOrder.create({ productId, username, count });
    }

    static async getOne(productOrderId: string) {
        return ProductOrder.get({ productOrderId });
    }

    static async getOrdersByProduct(productId: string) {
        return ProductOrder.query("productId")
            .eq(productId)
            .using("productId-createAt-index")
            .sort("descending")
            .exec();
    }

    static async getOrdersByProductInTimeRange(productId: string, startTime: number, endTime: number) {
        return ProductOrder.query("productId")
            .eq(productId)
            .using("productId-createAt-index")
            .where("createdAt")
            .between(startTime, endTime)
            .sort("descending")
            .exec();
    }

    static async getOrdersByUser(username: string) {
        return ProductOrder.query("username")
            .eq(username)
            .using("username-createAt-index")
            .sort("descending")
            .exec();
    }

    static async getOrdersByUserInTimeRange(username: string, startTime: number, endTime: number) {
        return ProductOrder.query("username")
            .eq(username)
            .using("username-createAt-index")
            .where("createdAt")
            .between(startTime, endTime)
            .sort("descending")
            .exec();
    }
}
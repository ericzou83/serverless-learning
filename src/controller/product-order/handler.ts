import { APIGatewayEvent, Handler } from "aws-lambda";

import { ProductOrderRepo } from "../../repos/product-order";

export const createProductOrder: Handler<APIGatewayEvent> = async (event) => {

    if (!event.body) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Body is required'
            })
        }
    }

    const { productId, username, count } = JSON.parse(event.body);

    if (!productId || !username || !count) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'productId, username, count are required'
            })
        }
    }

    const productOrder = await ProductOrderRepo.makeOne(productId, username, count);

    return {
        statusCode: 200,
        body: JSON.stringify(productOrder)
    }
}

export const getProductOrder: Handler<APIGatewayEvent> = async (event) => {

    const { id } = (event.pathParameters as ({ id?: string | null } | null)) ?? {};

    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'id is required'
            })
        }
    }

    const productOrder = await ProductOrderRepo.getOne(id);

    return {
        statusCode: 200,
        body: JSON.stringify(productOrder)
    }
}
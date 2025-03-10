import { ProductOrderRepo } from "./product-order";

import * as uuid from 'uuid';

const getProductUserAndCount = async () => {
    const productId = `product-${uuid.v4()}`;
    const username = `user-${uuid.v4()}`;
    const count = Math.floor(Math.random() * 100);

    return { productId, username, count };
}

test('ProductOrderRepo - makeOne', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order = await ProductOrderRepo.makeOne(productId, username, count);

    expect(order.productId).toBe(productId);
    expect(order.username).toBe(username);
    expect(order.count).toBe(count);
});

test('ProductOrderRepo - getOne', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order = await ProductOrderRepo.makeOne(productId, username, count);
    const getOrder = await ProductOrderRepo.getOne(order.productOrderId);

    expect(getOrder.productId).toBe(productId);
    expect(getOrder.username).toBe(username);
    expect(getOrder.count).toBe(count);
});

test('ProductOrderRepo - getOrdersByProduct', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order1 = await ProductOrderRepo.makeOne(productId, username, count);
    const order2 = await ProductOrderRepo.makeOne(productId, username, count);
    const order3 = await ProductOrderRepo.makeOne(productId, username, count);
    const order4 = await ProductOrderRepo.makeOne(productId, username, count);
    const order5 = await ProductOrderRepo.makeOne(productId, username, count);
    const order6 = await ProductOrderRepo.makeOne(productId, username, count);
    const order7 = await ProductOrderRepo.makeOne(productId, username, count);
    const order8 = await ProductOrderRepo.makeOne(productId, username, count);

    const orders = await ProductOrderRepo.getOrdersByProduct(productId);

    expect(orders.length).toBe(8);
});

test('ProductOrderRepo - getOrdersByProductInTimeRange', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order1 = await ProductOrderRepo.makeOne(productId, username, count);
    const order2 = await ProductOrderRepo.makeOne(productId, username, count);
    const order3 = await ProductOrderRepo.makeOne(productId, username, count);
    const order4 = await ProductOrderRepo.makeOne(productId, username, count);
    const order5 = await ProductOrderRepo.makeOne(productId, username, count);
    const order6 = await ProductOrderRepo.makeOne(productId, username, count);
    const order7 = await ProductOrderRepo.makeOne(productId, username, count);
    const order8 = await ProductOrderRepo.makeOne(productId, username, count);

    const orders = await ProductOrderRepo.getOrdersByProductInTimeRange(productId, order3.createdAt, order7.createdAt);

    expect(orders.length).toBe(5);
});

test('ProductOrderRepo - getOrdersByUser', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order1 = await ProductOrderRepo.makeOne(productId, username, count);
    const order2 = await ProductOrderRepo.makeOne(productId, username, count);
    const order3 = await ProductOrderRepo.makeOne(productId, username, count);
    const order4 = await ProductOrderRepo.makeOne(productId, username, count);
    const order5 = await ProductOrderRepo.makeOne(productId, username, count);
    const order6 = await ProductOrderRepo.makeOne(productId, username, count);
    const order7 = await ProductOrderRepo.makeOne(productId, username, count);
    const order8 = await ProductOrderRepo.makeOne(productId, username, count);

    const orders = await ProductOrderRepo.getOrdersByUser(username);

    expect(orders.length).toBe(8);
});

test('ProductOrderRepo - getOrdersByUserInTimeRange', async () => {
    const { productId, username, count } = await getProductUserAndCount();

    const order1 = await ProductOrderRepo.makeOne(productId, username, count);
    const order2 = await ProductOrderRepo.makeOne(productId, username, count);
    const order3 = await ProductOrderRepo.makeOne(productId, username, count);
    const order4 = await ProductOrderRepo.makeOne(productId, username, count);
    const order5 = await ProductOrderRepo.makeOne(productId, username, count);
    const order6 = await ProductOrderRepo.makeOne(productId, username, count);
    const order7 = await ProductOrderRepo.makeOne(productId, username, count);
    const order8 = await ProductOrderRepo.makeOne(productId, username, count);

    const orders = await ProductOrderRepo.getOrdersByUserInTimeRange(username, order3.createdAt, order5.createdAt);

    expect(orders.length).toBe(3);
});
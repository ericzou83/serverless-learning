import * as uuid from 'uuid';
import { UserRepo } from './user';

test('UserRepo - makeOne', async () => {
    const username = `user-${uuid.v4()}`;
    const name = `name-${uuid.v4()}`;

    const user = await UserRepo.makeOne(username, name);

    expect(user.username).toBe(username);
    expect(user.name).toBe(name);
})

test('UserRepo - getOne', async () => {
    const username = `user-${uuid.v4()}`;
    const name = `name-${uuid.v4()}`;

    const user = await UserRepo.makeOne(username, name);
    const getUser = await UserRepo.getOne(username);

    expect(getUser.username).toBe(username);
    expect(getUser.name).toBe(name);
});
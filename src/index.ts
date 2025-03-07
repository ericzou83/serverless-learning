import { initDynamoDb } from "./dynamo-setup";
import { UserRepo } from "./repos/user";

const main = async () => {
    initDynamoDb();
    // await UserRepo.makeOne('john512', 'John Doe');

    console.log(await UserRepo.getOne('john512'));
}

main();
import logger from "../services/logger.js";
import DaoMongoDB from "./dao-mongodb/mongodb.js";
import { UserModel } from "./dao-MongoDB/schemas/user.js";

let dao;
let argv = process.argv(2)


switch (argv) {
    case 'mongo':
        dao = new DaoMongoDB('user-ecommerce', UserModel);
        dao.initMongoDB();
        logger.info(argv);
        break;
    default:
        dao = new DaoMongoDB('user-ecommerce', UserModel);
        break;
}
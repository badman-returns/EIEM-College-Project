"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const createTablesAndInsertMasterData_1 = __importDefault(require("./database/createTablesAndInsertMasterData"));
const dotenv = require('dotenv');
dotenv.config();
class App {
    constructor() {
        this.app = express_1.default();
        this.apiV1Routes = express_1.default.Router();
        this.initializeMiddlewares();
        this.initializeLogger();
        this.initializeErrorHandling();
        this.routes();
    }
    listen() {
        this.app.listen(process.env.SERVER_PORT, () => {
            console.log(`App listening on the port ${process.env.SERVER_PORT}`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.raw());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(cookie_parser_1.default());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, '../uploads')));
        this.app.use(morgan_1.default('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
    }
    initializeErrorHandling() {
    }
    initializeLogger() {
        const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(LOG_PREFIX + ": ");
            log.apply(console, args);
        };
    }
    createDefaultTables() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(`Creating Admin User Table and Super Admin User ...`);
                yield createTablesAndInsertMasterData_1.default.createUserTableAndSuperAdmin();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    routes() {
        this.app.get('/', (req, res, next) => {
            res.send('Elitte Institute of Engineering and Management');
        });
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../uploads')));
        this.app.use('/api/v1', this.apiV1Routes);
    }
}
exports.default = App;

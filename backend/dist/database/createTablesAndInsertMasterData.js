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
const db_1 = __importDefault(require("../models/db"));
const encryption_1 = require("../utility/encryption");
const table_config_1 = require("../configs/table.config");
class CreateTablesAndInsertMasterData {
    constructor() {
    }
    // ADMIN USER TABLE
    static createAdminUserTable() {
        return new Promise((resolve, reject) => {
            db_1.default.query(`CREATE TABLE IF NOT EXISTS ${table_config_1.Tables.USER}(
                id INT NOT NULL AUTO_INCREMENT,
                name VARCHAR(100) NOT NULL,
                role VARCHAR(100) NOT NULL,
                userId VARCHAR(100) NOT NULL,
                password VARCHAR(255) NOT NULL,
                createdOn DATETIME default current_timestamp,
                PRIMARY KEY(id),
                CONSTRAINT contacts_unique UNIQUE (userId))
                `, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }
    static createSuperAdminUser() {
        return new Promise((resolve, reject) => {
            const user = {
                name: "Administrator",
                role: "SUPER_ADMIN",
                userId: "eiem@admin",
                password: encryption_1.Encryption.encryptPassword(process.env.ADMIN_DEFAULT_PASSWORD),
            };
            db_1.default.query(`INSERT IGNORE INTO ${table_config_1.Tables.USER} SET ?`, user, (err, res) => {
                if (err) {
                    return reject(err);
                }
                if (res.length) {
                    return resolve(true);
                }
                return resolve(null);
            });
        });
    }
    static createUserTableAndSuperAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield CreateTablesAndInsertMasterData.createAdminUserTable();
            }
            catch (e) {
                console.error('CREATE USER TABLE', e);
            }
            try {
                yield CreateTablesAndInsertMasterData.createSuperAdminUser();
            }
            catch (e) {
                console.error('CREATE SUPER ADMIN', e);
            }
        });
    }
}
exports.default = CreateTablesAndInsertMasterData;

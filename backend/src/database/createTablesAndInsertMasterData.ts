import db from '../models/db';
import { Encryption } from '../utility/encryption';
import { Tables } from '../configs/table.config';
import { Menu } from '../interfaces/menu.model';
import { ReadFile } from '../service/readWriteJson.service';

export default class CreateTablesAndInsertMasterData {
    constructor() {

    }

    // ADMIN USER TABLE
    private static createAdminUserTable(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.USER}(
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

    private static createSuperAdminUser(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const user = {
                name: "Administrator",
                role: "SUPER_ADMIN",
                userId: "eiem@admin",
                password: Encryption.encryptPassword(process.env.ADMIN_DEFAULT_PASSWORD),
            };

            db.query(`INSERT IGNORE INTO ${Tables.USER} SET ?`, user, (err, res) => {
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

    public static async createUserTableAndSuperAdmin() {
        try {
            await CreateTablesAndInsertMasterData.createAdminUserTable();
        } catch (e) {
            console.error('CREATE USER TABLE', e);
        }

        try {
            await CreateTablesAndInsertMasterData.createSuperAdminUser();
        } catch (e) {
            console.error('CREATE SUPER ADMIN', e);
        }
    }

     // MENU TABLES
     private static createPublicMenuTable() {
        return new Promise((resolve, reject) => {
            // db.query(`DROP TABLE ${Tables.MENU}`);
            db.query(`CREATE TABLE IF NOT EXISTS ${Tables.MENU} (
                id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id),
                level INT NOT NULL,
                parentMenu VARCHAR(255) NULL,
                name VARCHAR(255) NOT NULL,
                adminPath VARCHAR(255),
                publicPath VARCHAR(255),
                position VARCHAR(255),
                state VARCHAR(10),
                content text,
                updatedBy VARCHAR(255) NOT NULL,
                updatedOn DATETIME DEFAULT current_timestamp,
                CONSTRAINT contacts_unique UNIQUE (name))
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

    private static constructMenus(): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                let menuArray: Array<any> = [];
                const menus = await ReadFile<Array<Menu>>(`../../data/Menus.json`);
                menus.forEach((menu, index, array) => {
                    menuArray.push({
                        level: 1,
                        parentMenu: null,
                        name: menu.name,
                        adminPath: menu.adminPath,
                        publicPath: menu.publicPath,
                        position: menu.position,
                        state: menu.state,
                        content: null,
                        updatedBy: 'SYSTEM',
                    });

                    const subMenuList = menu.children.map((submenu) => {
                        return {
                            level: 2,
                            parentMenu: menu.name,
                            name: submenu.name,
                            adminPath: submenu.adminPath,
                            publicPath: submenu.publicPath,
                            position: menu.position,
                            state: menu.state,
                            content: null,
                            updatedBy: 'SYSTEM',
                        }
                    });

                    menuArray = menuArray.concat(subMenuList);

                    if (array.length === index + 1) {
                        resolve(menuArray);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    private static createPublicMenus() {
        return new Promise(async (resolve, reject) => {
            let menuArray: Array<any>;
            let keys: Array<string>;
            let values: Array<any>;

            menuArray = await CreateTablesAndInsertMasterData.constructMenus();
            keys = Object.keys(menuArray[0]);
            values = menuArray.map(obj => keys.map(key => obj[key]));

            db.query(`INSERT IGNORE INTO ${Tables.MENU} (${keys.join(',')}) VALUES ?`, [values], (err, res) => {
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

    public static async createPublicMenuTableAndMenus() {
        try {
            await CreateTablesAndInsertMasterData.createPublicMenuTable();
        } catch (e) {
            console.error('CREATE MENU TABLE', e);
        }

        try {
            await CreateTablesAndInsertMasterData.createPublicMenus();
        } catch (e) {
            console.error('CREATE MENUS', e);
        }
    }
}
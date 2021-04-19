"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStorage = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
class FileUploader {
    constructor() {
    }
    static getFolderPathName(fieldname) {
        const folderBasePath = "uploads";
        return `${folderBasePath}/${fieldname}/`;
    }
    static getStorage() {
        const storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                fs_1.default.mkdirSync(FileUploader.getFolderPathName(file.fieldname), { recursive: true });
                cb(null, FileUploader.getFolderPathName(file.fieldname));
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        return storage;
    }
}
const GetStorage = FileUploader.getStorage;
exports.GetStorage = GetStorage;

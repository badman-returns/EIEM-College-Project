import * as fs from 'fs';
import * as path from 'path';

class FileSystem {
    constructor() {

    }

    public static readFile<T>(location: string): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                const rawdata: any = fs.readFileSync(path.resolve(__dirname, location), "utf8");
                const jsonData = JSON.parse(rawdata);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        });
    }

}

const ReadFile = FileSystem.readFile;

export {
    ReadFile,
}
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import express, { NextFunction, Response, Request } from 'express';
import { AdminRouter, PublicRouter } from './routes';
import { DefaultAdminUser } from './utility/adminUserCreator';
const dotenv = require('dotenv');
dotenv.config();

class App {
  public app: express.Application;
  public apiV1Routes: express.Router;

  constructor() {
    this.app = express();
    this.apiV1Routes = express.Router();
    this.initializeMiddlewares();
    this.initializeLogger();
    this.initializeErrorHandling();
    this.routes();
  }

  public createDBConnection() {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
            console.log('Connected to Database ...')
            DefaultAdminUser.createDefaultAdminUser().then(() => {
                console.log('Default Admin User created ...');
            }).catch(error => console.log(error))
        }).catch(error => console.log(error));
}

  public listen() {
    this.createDBConnection();
    this.app.listen(process.env.PORT, () => {
      console.log(`App listening on the port ${process.env.PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.raw());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, '../uploads')));
    this.app.use(logger('[:date[web]] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
  }

  private initializeErrorHandling() {

  }

  private initializeLogger() {
    const LOG_PREFIX = new Date().getDate() + '.' + (new Date().getMonth() + 1) + '.' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    const log = console.log;
    console.log = function () {
      const args = Array.from(arguments);
      args.unshift(LOG_PREFIX + ": ");
      log.apply(console, args);
    }
  }

  private routes() {
    this.app.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.send('Elitte Institute of Engineering And Management');
    });
    this.app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
    this.app.use('/api/v1', this.apiV1Routes);
    this.apiV1Routes.use('/', PublicRouter);
    this.apiV1Routes.use('/admin', AdminRouter);
  }
}

export default App;
import * as Koa from 'koa';
import * as bodyParser from 'koa-body';
import * as Router from 'koa-router';
import { createPet } from './lib/petCreate';

const app = new Koa();
const _ = new Router();

_.post('/petcreate', createPet);

app
.use(bodyParser())
.use(_.routes())
export const server = app.listen(3000);
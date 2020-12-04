import { Query } from '../../db';


const all = () => Query('SELECT * FROM Categories');
const one = (id: number) => Query('SELECT * FROM Categories WHERE id=?', [id]);
const insert = () => Query('', []);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, one, insert, update, destroy }
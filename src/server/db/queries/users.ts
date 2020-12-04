import { Query } from '../../db';


const all = () => Query('');
const find = (column: string, value: string) => Query('SELECT * FROM Users WHERE ??=?', [column, value]);
const insert = (newUser: object) => Query('INSERT INTO Users SET ?', [newUser]);
const update = () => Query('', []);
const destroy = () => Query('', []);



export default { all, find, insert, update, destroy }
import { Query } from '../../db';


const all = () => Query('');
const findOne = (id: number, token: string) => Query('SELECT * FROM Tokens WHERE id=? AND token=?', [id, token]);
const insert = (userid: number) => Query('INSERT INTO Tokens(userid) VALUE(?)', [userid]);
const update = (id: number, token: string) => Query('UPDATE Tokens SET token=? WHERE id=?', [token, id]);
const destroy = () => Query('', []);



export default { all, findOne, insert, update, destroy }
import { Query } from '../../db';


const all = () => Query('SELECT Books.*, Categories.name FROM Books JOIN Categories ON Categories.id = Books.categoryid');

const one = (id: number) => Query('SELECT * FROM Books JOIN Categories ON Categories.id = Books.categoryid WHERE Books.id=?', [id]);

const insert = (categoryid: number, title: string, author: string, price: number) => Query('INSERT INTO Books SET categoryid=?, title=?, author=?, price=?', [categoryid, title, author, price]);

const update = (categoryid: number, title: string, author: string, price: number, id: number) => Query('UPDATE Books SET categoryid=?, title=?, author=?, price=? WHERE id=?', [categoryid, title, author, price, id]);

const destroy = (id: number) => Query('DELETE FROM Books WHERE id=?', [id]);



export default { all, one, insert, update, destroy }
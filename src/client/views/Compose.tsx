import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, User } from '../utils/api';

interface ComposeState {
  title: string,
  author: string,
  categoryid: string,
  price: number | string
}
interface ComposeProps extends RouteComponentProps { }


export default class Compose extends React.Component<ComposeProps, ComposeState> {
  constructor(props: ComposeProps) {
    super(props)
    this.state = {
      title: '',
      author: '',
      categoryid: '',
      price: null
    };
  }

  //check to make sure they are a user/logged in and routing to login view if not
  async componentDidMount() {
    if(!User || User.userid === null || User.role !== 'admin') {
      this.props.history.push('/login');
    }
  }

  addBook = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const details = {title: this.state.title, author: this.state.author, categoryid: this.state.categoryid, price: this.state.price}
    const result = await json('/api/books', 'POST', details);
    console.log(details)
    this.props.history.push('/');
  }

  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Add a Book</h1>
              <form>
                <input
                placeholder='Title'
                value={this.state.title}
                onChange={e => this.setState({title: e.target.value})}
                 />
                  <input
                placeholder='Author'
                value={this.state.author}
                onChange={e => this.setState({author: e.target.value})}
                 />
                  <input
                placeholder='Category ID'
                value={this.state.categoryid}
                onChange={e => this.setState({categoryid: e.target.value})}
                 />
                  <input
                placeholder='Price'
                value={this.state.price}
                onChange={e => this.setState({price: e.target.value})}
                 />
              </form>
              <button onClick={this.addBook}>Add Book</button>
          </div>
        </section>
      </main>

    )
  }

}

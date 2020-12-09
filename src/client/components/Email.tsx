import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';

interface EmailState {
  email: string,
  subject: string,
  message: string
}
interface EmailProps extends RouteComponentProps { }


export default class Email extends React.Component<EmailProps, EmailState> {
  constructor(props: EmailProps) {
    super(props)
    this.state = {
      email: '',
      subject: '',
      message: ''
    };
  }

onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
e.preventDefault();
const body = this.state;
try {
  await json('/api/mail', 'POST', body);
} catch (e) {
  throw e;
}
this.setState({email: " ", subject: " ", message: " "})
}


  render() {
    return (
      <main className="container">
        <form className="form-group mt-5 border rounded shadow p-3 bg-info"
        onSubmit={this.onSubmit}
        >
          <label>Email</label>
          <input type="text" value={this.state.email} className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({email: e.target.value})}
          />
          <label>Subject</label>
          <input type="text" value={this.state.subject} className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({subject: e.target.value})}
          />
          <label>Message</label>
          <input type="text" value={this.state.message} className="input-group my-1 p-1"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({message: e.target.value})}
          />
          <button className="btn btn-secondary border border-dark mt-2">Send me that email!</button>
        </form>
      </main>

    )
  }

}

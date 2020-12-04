import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { json, SetAccessToken } from '../utils/api';

interface LoginState {
  email: string,
  password: string
}
interface LoginProps extends RouteComponentProps { }


export default class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props)
    this.state = {
      email: 'test@test.com',
      password: 'password123'
    };
  }

  handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      let result = await json('/auth/login', 'POST', {email: this.state.email, password: this.state.password})
      if (result) {
        SetAccessToken(result.token, {userid: result.userid, role: result.role});
        this.props.history.push('/');
      }
    } catch (error) {
      throw error
    }
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Login</h1>
            <form>
              <input 
              placeholder='Email'
              value={this.state.email}
              onChange={e => this.setState({email: e.target.value})}
              />
              <input 
              placeholder='Password'
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              />
            </form>
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </section>
      </main>

    )
  }

}

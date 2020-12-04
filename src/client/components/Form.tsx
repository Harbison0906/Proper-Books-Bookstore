import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class Form extends React.Component<IFormProps, IFormState> {

  constructor(props: IFormProps) {
    super(props)
    this.state = {
      name: "",
      amount: ""
    }
  }

  handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      let { token } = await this.props.stripe.createToken({ name: this.state.name });
      let amount = this.state.amount;
      await fetch('/api/donate')
      console.log(token);
    } catch (e) {
      throw e;
    }
  }

  render() {
    return (
      <main className="container">
        <form
          className="form-group mt-3 border shadow p-3"
          onSubmit={this.handleSubmit}
        >
          <h3 className="m-3 text-center">Help us help you...</h3>
          <p className="m2">At Proper Books, we provide the best selection of books for your enjoyment, but it comes at a cost. We would greatly appreciate any and every dontation, no matter how big or how small. Thank you!</p>
          <label>Name</label>
          <input
            type="text"
            className="input-group my-1 p-1"
            value={this.state.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
          />
          <label>Amount</label>
          <input
            type="text"
            className="input-group my-1 p-1"
            value={this.state.amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
          />
          <label>CC Number / Exp. Date / CVC</label>
          <CardElement className="p-2 border border-dark" />
          <button className="btn btn-primary border border-dark mt-2">Donate</button>
        </form>
      </main>
    );
  }

}


interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState {
  name: string,
  amount: string
}

export default injectStripe(Form);
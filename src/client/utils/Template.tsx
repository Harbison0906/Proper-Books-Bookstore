import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface TemplateState {}
interface TemplateProps extends RouteComponentProps {}


export default class Template extends React.Component <TemplateProps, TemplateState> {
  constructor(props: TemplateProps) {
    super(props)
    this.state = {};
  }

  async componentDidMount() {
    // const books = await json();
    // this.setState({});
  }


  render() {
    return (
      <main className="container">
        <section className="row mt-5">
          <div className="col-12">
            <h1 className="text-center">Template View</h1>
          </div>
        </section>
      </main>

    )
  }

}

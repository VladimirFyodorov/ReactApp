import React, {Component} from 'react';


class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {years: 26};
    this.nextYear = this.nextYear.bind(this);
    this.prevYear = ()=>{
      this.setState(state => ({
        years: --state.years}
      ))}
  }

  nextYear() {
    this.setState(state => ({
      years: ++state.years}
    ))}

  render() {
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <button onClick={this.prevYear}>--</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}


function All() {
  return (
    <>
      <WhoAmI name='Vova' surname='Fyodorov' link='facebook.com'/>
      <WhoAmI name='Sasha' surname='Pupkina' link='google.com'/>
      <WhoAmI name='Glasha' surname='Zalupkina' link='vk.com'/>
    </>
  )
}

export default All;
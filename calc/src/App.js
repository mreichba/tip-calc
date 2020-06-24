import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipPercent: 0,
      tipAmount: 0,
      totalAmount: 0,
      bill: 0
    };
  }


  updateBillAmount(value) {
    this.setState({
      bill: value
    })
  }

  updateTipPercent(value) {
    this.setState({
      tipPercent: (value * .01)
    })
    this.calculateTip()
  }

  calculateTip() {
    let tip = this.state.bill * this.state.tipPercent;
    this.setState({
      tipAmount: tip
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tip Calculator</h1>
        <form>
          <div className='bill'>
            <label htmlFor='bill'>Bill Amount: </label>
            <input type='number' className='bill' id='bill' onChange={e => this.updateBillAmount(e.target.value)}></input>
          </div>
          <div className='tip'>
            <label htmlFor='tip'>Tip %: </label>
            <input type='number' className='tip' id='tip' onChange={e => this.updateTipPercent(e.target.value)}></input>
          </div>
        </form>
        <div className='total'>
          {/* <p className='tipAmount'>Tip Amount is: ${this.state.bill * this.state.tipPercent}</p> */}
          <p className='tipAmount'>Tip Amount is: ${this.state.tipAmount}</p>
          <p className='totalAmount'>Total Bill is: ${this.state.bill + (this.state.bill * this.state.tipPercent)}</p>
        </div>
      </div>
    );
  }
}

export default App;

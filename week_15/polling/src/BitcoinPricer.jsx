import React from 'react';

class BitcoinPricer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      color: 'pink'
    }
  }

  getData(){
    const request = new XMLHttpRequest();
    request.onload = () => {
      const priceData = JSON.parse(request.responseText);
      this.setState({
       price: priceData.bpi.GBP.rate_float
     })
    }
    request.open("GET", this.props.url);
    request.send();
  }

  componentDidMount(){
    this.getData();
    setInterval(() => {
      this.getData();
    }, 1000);
  }

  componetWillUdpdate(nextState){
    if (this.state.price > nextState){
      this.setState =({
        color: 'green'
      })
    }else{
      this.setState=({
        color:'red'
      })
    }
  }

  render(){
    let priceInfo = this.state.price;
    let backgroundColor = {background: this.state.color}
    if (!priceInfo) priceInfo = "Loading...";

    return (
      <div style={backgroundColor}>
      <h1>GBP Bitcoin Price Index Rate: {priceInfo}</h1>
      </div>
      )
  }
}

export default BitcoinPricer
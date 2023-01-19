import React from "react";

class Orologio extends React.Component {
  constructor(props) {
    console.log ("Componente inizializzato");
    super(props);
    this.state = {
      time: new Date()
    };
    this.conta = {
        conta : 1
    }
  }

  tick() {
    console.log ("Funzion tick chiamata");
    this.setState(state => ({
      time: new Date()
    }));
    this.setState(conta => ({
        conta: 2
      }));
  }

  componentDidMount() {
    console.log ("Componente creato e montato");
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    console.log ("Componente distrutto");
    clearInterval(this.interval);
  }

  render() {
    console.log ("Render del mio componente "+this.conta);
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
        <p>Contatore </p>
      </div>
    );
  }
}

export default Orologio;
import React, { Component } from 'react';

export default class Home2 extends Component {
    state = {
        legenda: 'Estou no React (class)'
    }

    resetLegenda() {
        this.setState({
            legenda: 'Estou no React (Classe)!!!!'
        })
    }

    render() {
        return (
            <div>
                 <h1>{this.props.msg}</h1>  
                 <h2>{this.state.legenda}</h2>   
                 <input type="text" value={this.state.legenda} onChange={ e => this.setState({ legenda: e.target.value })} />   
                 <button onClick={() => this.resetLegenda() }>Reset Legenda</button>     
            </div>
         );
    }
}
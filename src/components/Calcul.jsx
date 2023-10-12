import React, { Component } from 'react'

export default class Calcul extends Component {

    state = {
        capital: 0,
        taux: 0,
        duree: 0,
        mensualité: 0
    }

    handleOnchange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]:  value
        });
    }

    render() {
        return (
            <div className='calcul'>
                <div className='content'>
                    <div className='group'>
                        <label htmlFor='capital'>Capital emprunté :</label>
                        <input type="number" name="capital" id="capital" value={this.state.capital} onChange={this.handleOnchange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='taux'>Taux d'interet :</label>
                        <input type="number" name="taux" id="taux" value={this.state.taux} onChange={this.handleOnchange}/>
                    </div>
                    <div className='group'>
                        <label htmlFor='duree'>Durée de remboursement :</label>
                        <input type="number" name="duree" id="duree" value={this.state.duree} onChange={this.handleOnchange}/>
                    </div>
                    <div className='btns'>
                        <button>Calculer</button>
                        <button>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor='mens'>Mensualité :</label>
                        <input type="number" name="mensualité" id="mens" value={this.state.mensualité} onChange={this.handleOnchange} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}

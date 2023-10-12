import React, { Component } from 'react'

export default class Calcul extends Component {
    render() {
        return (
            <div className='calcul'>
                <div className='content'>
                    <div className='group'>
                        <label htmlFor='capital'>Capital emprunté :</label>
                        <input type="number" name="capital" id="capital" />
                    </div>
                    <div className='group'>
                        <label htmlFor='taux'>Taux d'interet :</label>
                        <input type="number" name="taux" id="taux" />
                    </div>
                    <div className='group'>
                        <label htmlFor='duree'>Durée de remboursement :</label>
                        <input type="number" name="duree" id="duree" />
                    </div>
                    <div className='btns'>
                        <button>Calculer</button>
                        <button>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor='mens'>Mensualité :</label>
                        <input type="number" name="mens" id="mens" readOnly />
                    </div>
                </div>
            </div>
        )
    }
}

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoHeader = () => (
    <div className="list">
      <p className="coins">Coin Type</p>
      <div className="cards-list">
        <p className="usd">USD</p>
        <p className="usd">Euro</p>
      </div>
    </div>
  )
  renderCryptoView = () => {
    const {updateData} = props

    return (
      <div className="list-container" data-testid="loader">
        {this.renderCryptoHeader()}

        <ul className="currency-list">
          {updateData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} updateData={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div className="bg-container">
        <h1>Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptoView()}
      </div>
    )
  }
}
export default CryptocurrenciesList

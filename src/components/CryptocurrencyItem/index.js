import './index.css'

const {updateData} = props
const {currencyLogoUrl, currencyName, usdValue, euroValue} = updateData

return (
  <li className="lists">
    <div className="card" data-testid="loader">
      <img src={currencyLogoUrl} className="image" alt={currencyName} />
      <p className="para">{currencyName}</p>
    </div>

    <div className="lists-container">
      <p className="value">{usdValue}</p>
      <p className="value">{euroValue}</p>
    </div>
  </li>
)
export default CryptocurrencyItem

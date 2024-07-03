// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateValue = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="background-co">
        <div className="co1">
          <h1 className="s-co">{initial}</h1>
          <h2 className="SarahWilliams">{name}</h2>
        </div>

        <div className="co2">
          <p className="YourBalance">Your Balance</p>
          <p className="displayNumber">{balance}</p>
          <p className="InRupees">In Rupees</p>
        </div>
        <div className="co3">
          <p className="Withdraw">Withdraw</p>
          <p className="chooseSum">CHOOSE SUM (IN RUPEES)</p>
        </div>
        <ul className="unOrderList">
          {denominationList.map(eachDenomination => (
            <DenominationItem
              key={eachDenomination.id}
              denominationDetails={eachDenomination}
              updateValue={this.updateValue}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default CashWithdrawal

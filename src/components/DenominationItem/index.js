// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateValue} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateValue(value)
  }
  return (
    <li>
      <button type="button" onClick={onClickDenomination} className="button1">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

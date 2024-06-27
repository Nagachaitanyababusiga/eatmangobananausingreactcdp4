// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  IncreaseBanana = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount,
      bananaCount: prevState.bananaCount + 1,
    }))
  }

  IncreaseMango = () => {
    this.setState(prevState => ({
      mangoCount: prevState.mangoCount + 1,
      bananaCount: prevState.bananaCount,
    }))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="cont1">
        <div className="cont2">
          <h1>
            S.Babu ate <span className="tester">{mangoCount}</span> mangoes{' '}
            <span className="tester">{bananaCount}</span> bananas
          </h1>
          <div className="cont3">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="imager"
                alt="mango"
              />
              <button
                className="btn-pr"
                type="button"
                onClick={this.IncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <div className="card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  className="imager"
                  alt="banana"
                />
                <button
                  className="btn-pr"
                  type="button"
                  onClick={this.IncreaseBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

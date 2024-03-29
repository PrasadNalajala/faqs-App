
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {questionOpened: []}

  togglequestion = id => {
    const {questionOpened} = this.state
    if (questionOpened.includes(id)) {
      this.setState({
        questionOpened: questionOpened.filter(each => each !== id),
      })
    } else {
      this.setState({questionOpened: [...questionOpened, id]})
    }
  }

  render() {
    const {faqsList} = this.props
    const {questionOpened} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faqItem={each}
                key={each.id}
                questionOpened={questionOpened}
                togglequestion={this.togglequestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs

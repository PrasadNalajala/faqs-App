// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqItem, questionOpened, togglequestion} = props
  const {id, questionText, answerText} = faqItem
  // console.log(questionOpened.includes(id))
  const isOpened = questionOpened.includes(id)
  const imageUrl = isOpened
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  console.log(isOpened, imageUrl)

  const altText = isOpened ? 'minus' : 'plus'

  const toggleShow = () => {
    togglequestion(id)
  }

  return (
    <li className="itemContainer">
      <div className="questionContainer">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={toggleShow}>
          <img src={imageUrl} alt={altText} />
        </button>
      </div>
      {isOpened && (
        <div>
          <hr />
          <p className="ans">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem

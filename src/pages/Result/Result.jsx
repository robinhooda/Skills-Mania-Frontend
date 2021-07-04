import { useData } from '../../contexts/DataContext'
import { Link } from 'react-router-dom'
import './Result.css'

export default function Result() {
  const {
    state: { score, currentQuiz },
  } = useData()
  return (
    <div className='Result'>
      <Link to='/category'>
        <button className='path back-button bold'>
          <i className='fas fa-chevron-left pad-r-xs'></i>Back
        </button>
      </Link>
      <h2 className='text-center mar-sm'>Result</h2>
      <p className='bold text-center mar-sm'>
        Final Score: {score} / {currentQuiz?.totalScore}
      </p>
      <div>
        {currentQuiz?.questions.map((question) => (
          <div className='box-border'>
            <p className='bold mar-t-sm mar-b-sm'>{question.question}</p>
            <div className='result-options--list'>
              {question.options.map((option) => (
                <div>
                  <p
                    className={`result-options--button text-center ${
                      option.isAnswer && 'green-button'
                    } ${
                      option.id === question.selectedOptionId &&
                      !option.isAnswer &&
                      'red-button'
                    }`}
                  >
                    {option.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

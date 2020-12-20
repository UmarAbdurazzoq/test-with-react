import {useReducer,useState} from 'react';
import './App.css';
import {answers, options, questions} from './data.js';
import {Reducer} from './Reducers/Question';

function App () {
	let countscore = 0;
	const [dataA, dispatch] = useReducer(Reducer, answers)
	const [disabled, setDisabled] = useState(false)
	const [score, setScore] = useState(0)
	const dataO = options;
	const dataQ = questions;

	const addScore =()=>{
		dataA.map(Adata=>{
			if (Adata.answer) {
				countscore++
				setScore(countscore)
			}else{
			}
			return score;
		})
		setDisabled(true)
	}
	
	return (
		<>
		<h1 className='heading'>Test</h1>
		{
			dataQ.map(Qdata=>(
				<div className='wrapper-test'>
					<h1 ><span className='question-span'>Question {Qdata.id}:</span> 	{Qdata.question}</h1>

					<ul key={Qdata.id}>
				{dataO.map(Odata=>(
					<>
						{Odata.key === Qdata.key && <li key={Odata.id}>
							<input type='radio'disabled={disabled} name={Odata.key} id={Odata.id} onChange={
								()=>{	dispatch({key: Odata.key, answer: Odata.isRight})}
							} />
							<label htmlFor={Odata.id}>{Odata.option}</label>
						</li>}
					</>
				))}
				</ul>
				</div>
			))
		}

		<div className='wrapper'>
			<button className='btn' onClick={addScore}>get answers</button>
			<p className='score-rating'>{score}/{dataA.length}</p>
			<a className='btn' href="/">restart</a>
		</div>
		 
		<ul className="answer-wraper">
		 {
			 dataA.map(Adata=>(
				disabled &&
				<li>	
					<span>{Adata.id}-question  is {Adata.answer ? "true" : "false"}</span>
				</li>
			 ))  
			}
		</ul>
		</>
	)
}


export default App
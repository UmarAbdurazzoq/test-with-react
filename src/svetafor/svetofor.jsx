import { Fragment, useReducer, useEffect } from 'react'
import './App.css'
import Data from '../data.js';
import Reducer from '../Reducers/Meeting'

function App () {
	
	const [users, dispatch] = useReducer(Reducer, Data)
	
	useEffect(() => {
		setInterval(() => {
			
			setTimeout(() => {
		
				dispatch({ userId: 1, isOn: true })
				dispatch({ userId: 2, isOn: false })
				dispatch({ userId: 3, isOn: false })
		
			}, 1000)
			setTimeout(() => {
		
				dispatch({ userId: 2, isOn: true })
				dispatch({ userId: 1, isOn: false })
				dispatch({ userId: 3, isOn: false })
		
			}, 2500)
			setTimeout(() => {
		
				dispatch({ userId: 3, isOn: true })
				dispatch({ userId: 2, isOn: false })
				dispatch({ userId: 1, isOn: false })
		
			}, 3000)
		}, 4000);
	
	
		
	}, [])

	return (
		<Fragment>
		
			{
			
			    <div>
						{
							users.map(user => (
								<span key={user.id}> 
									{user.isOn && <span  className={user.name}></span>}
								</span>
							
							))
						}
					</div>
				
			}


			
		</Fragment>
	)
}

export default App


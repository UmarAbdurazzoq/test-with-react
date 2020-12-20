export const options = [
	{ id: 1,  option: '5', 		isRight: true,  key: 's01', },
	{ id: 2,  option: '7',		isRight: false, key: 's01', },
	{ id: 3,  option: '3',		isRight: false, key: 's01', },

	{ id: 4,  option: 'undefined',		isRight: false, key: 's02', },
	{ id: 5,  option: 'NaN', 	 	 	isRight: true,  key: 's02', },
	{ id: 6,  option: 'null',		isRight: false, key: 's02', },
	
	{ id: 7,  option: 'true',		isRight: true,  key: 's03', },
	{ id: 8,  option: 'false',		isRight: false, key: 's03', },
	{ id: 9,  option: 'undefined', 		 	isRight: false, key: 's03', },

	{ id: 10, option: 'NaN',		isRight: false, key: 's04', },
	{ id: 11, option: 'true',		isRight: false, key: 's04', },
	{ id: 12, option: 'false',		isRight: true,  key: 's04', },
]

export const questions = [
	{ id: 1,  question: '2 + 2 * 2 - 2 / 2',  key: 's01', },
	{ id: 2,  question: 'undefined + null',  key: 's02', },
	{ id: 3,  question: '! ( true && 0 > undefined )',  key: 's03', },
	{ id: 4,  question: '! true || true && 0 > undefined',  key: 's04', },
]

export const answers = [
	{ id: 1,  answer: false,  key: 's01', },
	{ id: 2,  answer: false,  key: 's02', },
	{ id: 3,  answer: false,  key: 's03', },
	{ id: 4,  answer: false,  key: 's04', },
]



// const data = [
// 	{ id: 1, name: 'red', 	 	isOn: false, },
// 	{ id: 2, name: 'yellow',	isOn: false, },
// 	{ id: 3, name: 'green',		isOn: false, },
// ]
// const data = [
// 	// { id: 1, username: 'Muhammad',	isOnline: false, },
// 	// { id: 2, username: 'Najmuddin',	isOnline: false, },
// 	// { id: 3, username: 'Harun',		isOnline: false, },
// 	// { id: 4, username: 'Suleiman',	isOnline: false, },
// 	// { id: 5, username: 'Yahyo',		isOnline: false, },
// 	// { id: 6, username: 'Sofia',		isOnline: false, },
// ]

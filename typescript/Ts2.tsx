// ? псевдоним типа
type Show ={
	title: string,
	date: Date
}

type Skill = {
	starYear: number,
	guitarCount: number,
	shows: Show[]
}
type Man = {
	firstName: string,
	lastName: string,
	age: number,
}
type Musicant = {
	description: Man,
	skill: Skill
}

const alexPoll: Musicant = {
	description: {
		firstName: 'Alex',
		lastName: 'Poll',
		age: 52
	},
	skill: {
		starYear: 1970,
		guitarCount: 7,
		shows: [
			{
				title: 'London best show',
				date: new Date()
			}
		]
	}
}
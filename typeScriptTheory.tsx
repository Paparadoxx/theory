const isActive: boolean = true;
const studentNumber: number = 2;
const firstName: string = 'Alice';
const currentDate: Date = new Date();
const bigNumber: bigint = 1000n;

//? типизация массивов
const users: string[] = ['Vlad', 'Alex', 'Tim'];
const valuesOfSmth: number[] = [2,3,66]; 
const boolValues: boolean[] = [true, false, true, true];

//? типизация объектов 
let client: {
	firstName: string,
	secondName: string,
	age?: number
}
//? объект с неопределленым количеством полей
let permission: {
	[propertyName:string]: boolean
}
permission = {
	canCreate: true,
	canEdit: false,
	canDelete: true
}
// * только для чтения поля объекта
let guitarPlayer: {
	readonly firstname: string,
	readonly lastname: string,
	guitarCount: number 
}
guitarPlayer =  {
	firstname : 'Garry',
	lastname : 'Moore',
	guitarCount : 7 
}
//* guitarPlayer.lastname = "Andy"; <- только для чтения не меняется

//* только для чтения Массив
let fruits: readonly string[] = ['orange','apple','pineapple'];
//* fruits.push('grape'); <- только для чтения не меняется

// ? Функции



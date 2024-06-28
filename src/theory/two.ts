/*Массивы */
const numbers:number[] = [12,23,44,77]
const numbers2:Array<number> = [34,56,33,85]//устаревшее
const stringes:string[] = ['hello','bye','opa']

/*Кортежи */
const corteg1:[number,number] = [25,35]
const corteg2:[string,number,boolean] = ['Max', 10, true]

/*Функции */
function getAge(name?:string):number{
 return 28
}
getAge('Volodya')

const getAge2=(name:string):number => 25

/*REST */
export function getFullName(firstName: string, ...names:string[]){
    return firstName + ' ' + names.join(' ')
}

/*Функциональные перегрузки */
function getInfo(name: string):string
function getInfo(age:number): number
function getInfo(single: boolean):boolean
function getInfo(value:any):any {
    return value
}

const result = getInfo('123')
const result1 = getInfo(123)
const result2 = getInfo(true)
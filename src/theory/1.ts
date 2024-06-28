/*Базовые стили */
let firstName:string = 'Jenya'
let age:number = 39
let athlete:boolean = true
let profile:undefined = undefined
let city:null = null
let isHasGirl:unknown = null
let dogName:any = true // can any types

/*Структура объектов */
const userProfile:{
    name:string,
    age:number,
    isOwner:boolean
} = {
    name:'Jenya',
    age:39,
    isOwner:true
}
userProfile.age = 33
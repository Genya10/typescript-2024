/* Enum ( константы в typescript) */
enum Colors {
    red,
    green,
    yellow
}

enum Tokens {
    accessToken,
    refreshToken
}

const primary:Colors = Colors.red
const tokens:Tokens = Tokens.accessToken

/* Утверждения (Assertions) */
const someValue: any = 'qwerty'
const strLength: number = (someValue as string).length

/*Generic (Обобщеня) */
function getCar<T extends string>(name:T){
 return name
}

getCar('Bugatti')

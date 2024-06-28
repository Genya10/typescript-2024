/*Классы и типы */
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const DOG = new Animal("lohmach");

/*Интерфейсы*/
interface IProfile {
  name: string;
  age: number;
  isOwner: boolean;
}
const profile: IProfile = {} as IProfile;

interface ICat {
  has: boolean;
}
interface IProp extends IProfile, ICat {
  isDog: boolean;
}
const profile2: IProp = {
  name: "Vova",
  age: 33,
  isOwner: true,
  isDog: false,
  has: true,
};

/*Типы */
type TProfile = {
  name: string;
  age: number;
  isOwner: boolean;
};
type TDog = {
  has: boolean;
};
type Thumster = string | boolean;
type TAnimal = {
  has: boolean;
  hamster: Thumster;
} & TProfile;

const profile3: TAnimal = {
  name: "Max",
  age: 5,
  has: false,
  isOwner: true,
  hamster: "Homyak",
};

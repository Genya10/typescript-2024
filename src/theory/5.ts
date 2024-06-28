/* Utility types*/
interface IProfile {
  name: string;
  age: number;
  isOwner: boolean;
}

const profile4: Pick<IProfile, "name"> = {
  name: "Roman",
};
const profile5: Omit<IProfile, "name"> = {
  age: 55,
  isOwner: true,
};
const profile6: Partial<IProfile> = {};
const profile7: Required<IProfile> = {
  age: 55,
  isOwner: true,
  name: "Horik",
};
const profile8: Readonly<Pick<IProfile, "age">> = {
  age: 55,
};

/*Record*/
const shop:Record<string,number> = {
 apple:22,
 pineapple:50,
}
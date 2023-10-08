const users = [
  {
    name: "Albert",
    lastname: "Doe",
    age: 20,
    programmingLanguage: "Javascript",
  },
  {
    name: "Patty",
    lastname: "O'Furniture",
    age: 21,
    programmingLanguage: "Python",
  },
  {
    name: "Olive",
    lastname: "Yew",
    age: 22,
    programmingLanguage: "Php",
  },
  {
    name: "Teri",
    lastname: "Dactyl",
    age: 23,
    programmingLanguage: "Go",
  },
];

// code here...


const getFullName=(users)=>{
  return users.map((user)=>{
    const {name,lastname,...rest}=user
    return {fullName:`${user.name} ${user.lastname}`,...rest}
  })
}

const ageSorting=(users)=>{
  return users.slice().sort((a,b)=>b.age-a.age)
}

const findByName=(users,name)=>{
  return users.filter(user=>user.name===name)
}

console.log(findByName(users,"Teri"))
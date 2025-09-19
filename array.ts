let list: number[] = [1, 2, 3]; //1 way
let list02: Array<number> = [1, 2, 3]; //2 way

console.log(typeof list)

let hobbies = ['sports','cooking',10, true]
hobbies.push(10); //this will complain because a string can not be assigned to a number
hobbies.sort(); 

let sports: string[] = ["Tennis","Swimming"]
let work : (string | number)[] = ["Done",12]
let users: Array<string | number> = ["Done",12]// the same as previous

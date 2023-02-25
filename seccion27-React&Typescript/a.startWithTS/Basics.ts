//primitives

let age: number;


//complex

let course: string | number = 'react someting';

course = 12;
//functions


// function add(a: number, b: number): number {
//   return a + b
// }

// const print = (value: any) => {
//   console.log(value)
// }
//generics

function insertAtBeginning<T>(array: T[], value: T): T[] {
  return [value, ...array];
}

const demoArr = [1,2,3,4];
const updatedArray = insertAtBeginning<number>(demoArr, -1)
const updatedArraystring = insertAtBeginning<string>(['v','a','z'], 't')
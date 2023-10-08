// First scenario
const array1 = [1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 9];

// Second scenario
const array2 = [0, 0, 5, 1, 6, 7, 6, 6, 7,7,7, 2, 0, 8, 8];

// Third scenario
const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Fourth scenario
const array4 = [0,0,0,0,1,1,1,1,1,1,1,2,3];

// code here...

const followTheMode=(numbers)=>{
    let mode=[]
    let sum=0
    let maxInstance=0
    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i]===numbers[i-1]){
            sum++
            if(sum>maxInstance){
                maxInstance=sum
                mode=[]
                mode.push(numbers[i])
            }
            if(sum===maxInstance && mode[0]!=numbers[i] ){
                mode.push(numbers[i])
            }
        }else{
            sum=0
        }
    }
    return mode
}

console.log(followTheMode(array3.sort()))
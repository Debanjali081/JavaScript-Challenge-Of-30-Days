// Task 5 : Write a loop that creates an array of functions . Each function should log its index when called . Use a closure to ensure each function logs correct index.

let arr = []

for(let i=0;i<3;i++){
    arr.push((function(index){
        return function(){
            console.log(index);
        };
    })(i));
}

arr[0]();
arr[1]();

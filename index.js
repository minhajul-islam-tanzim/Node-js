

let arr = [1, 2, 3, 4]

let z = 0;


function my(arr){

     for (let i = arr.length - 1; i > z; i--) {
            let temp = arr[i]
            arr[i] = arr[z]
            console.log(arr[i])
            arr[z] = temp;
            z++


        }
        console.log(arr)

}

my(arr)




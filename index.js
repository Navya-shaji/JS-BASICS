// Create a new array containing all the numbers between the minimum and maximum values.

// let a=[1,8,7,9,10]
// let size=0;
// let empty=[]
// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]>a[j]){
//             [a[i],a[j]]=[a[j],a[i]]
//         }
//     }
// }
// let Max=a[a.length-1]
// let Min=a[0]
// for(let k=Min;k<=Max;k++){
//     empty[size]=k
//     size++
// }
// console.log(empty)



//Largest Even Number...............................................

// let arr=[1,5,7,3,8,67,34]
// let Largesteven=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0>Largesteven){
//        Largesteven=arr[i]
//     }
// }
// console.log(Largesteven)


//Repeated Number Count..........................................

// let arr=[1,2,1,3,4,3,5,5,6];
// let count=0;
// for(let i=0;i<arr.length-1;i++){
//     let temp=0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             let temp=1
//             count++
//         }
//     }
// }
// console.log(count)


//Frequency Number Count..........................................

// let arr=[1,4,2,3,5,7,1,1,2,2,8,9,10]
// let freq={}
// for(let i=0;i<arr.length;i++){
//     let count=0

//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
       
//         }
//          if(!freq[arr[i]]){
//             freq[arr[i]]=count
//     }
    
// }
// for(let key in freq){
//     console.log(key,freq[key])
// }



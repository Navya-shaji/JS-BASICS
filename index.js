// Create a new array containing all the numbers between the minimum and maximum values..................................................

// let arr=[3,1,2,4,5,6,8,9,10]
// let a=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }
// }
// let min=arr[arr.length-1]
// let max=arr[0]
// for(let k=0;k<arr.length;k++){
//    if(arr[k]!==min && arr[k]!==max){
//        a[a.length]=arr[k]
//    }
// }
// console.log(a)




//Largest Even Number.............................................................................................................

// let arr=[1,5,7,3,8,67,34]
// let Largesteven=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0>Largesteven){
//        Largesteven=arr[i]
//     }
// }
// console.log(Largesteven)

// ..........................................................................OR.....................................................................

// let arr=[3,1,2,4,5,6,8,9,10]
// let a=[]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//         }
//     }
//         if(arr[i]%2==0){
//             a[a.length]=arr[i]
//         }
// }
// max=a[a.length-1]
// console.log(max)


//odd number small................................................................................................................................................

// let arr=[3,1,2,4,5,6,8,9,10]
// let a=[]
// for(let i=0;i<arr.length;i++){
   
//         if(arr[i]%2==1){
//             a[a.length]=arr[i]
//         }
    
// }
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]<a[j]){
//             [a[i],a[j]]=[a[j],a[i]]
//         }
//     }
// }
// let small=a[a.length-1]
// console.log(small)


//Repeated Number Count................................................................................................................................................

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


//Frequency Number Count............................................................................................................

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


// Largest Number From An Array......................................................................................................

// let arr=[2,1,4,3,5,6,8,9,10]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             [arr[j],arr[i]]=[arr[i],arr[j]]
//         }
//     }
// }
// console.log(arr[0])


//Sum of Object Values................................................................................................................

// let obj = {
//     a: 10,
//     b: "Hello",
//     c: 20,
//     d: "Navya",
//     e: 30,
//     f: 40,
//     g: "CS"
// };
// let sum=0
// let Values=Object.values(obj)
// for(let i=0;i<Values.length;i++){
//     if(typeof(Values[i])=="number"){
//         sum+=Values[i]
//     }
// }
// console.log(sum)


//Count of Vowels.................................................................................................................................

// let word="Hello"
// let Vowels="aeiouAEIOU"
// let count=0
// for(let i=0;i<word.length;i++){
//     for(let j=0;j<Vowels.length;j++){
//         if(word[i]==Vowels[j]){
//             count++
//         }
//     }
// }

// console.log(count)

//String Reverse..........................................................................................................................

// let str="Hello world"
// let newStr=""
// for(let i=str.length-1;i>0;i--){
//     newStr+=str[i]
// }
// console.log(newStr)



//Avg of prime numbers in an array........................................................................................................

// let arr=[2,5,7,9,8,3,1]
// sum=0
// count=0
// for(let i=0;i<arr.length;i++){
//     flag=0
//   for(let j=2;j<arr[i];j++){
//       if(arr[i]%j==0 ){
//           flag=1
//       }
//   }
//   if(flag==0 && arr[i]!==1){
//       count++
//       sum+=arr[i]
//       console.log(arr[i])
//   }
 
// }
//  console.log(sum/count)



//Delete the duplicate/unique in an array..........................................................................................

// let arr=[1,2,4,5,3,7,1,2]
// for(let i=0;i<arr.length;i++){
//     flag=0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//            flag=1
//         }
//     }
//     if(flag==0){
//         console.log(arr[i])
//     }
// }

//Print the duplicate numbers in an array...............................................................................

// let arr=[1,2,4,5,3,7,1,2]
// for(let i=0;i<arr.length;i++){
//     flag=0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//            flag=1
//         }
//     }
//     if(flag==1){
//         console.log(arr[i])
//     }
// }

// Return “hello” as “o”,”l”,”l”,”e”,”h”...........................................................................

// let str="hello"
// let result=""
// for(let i=str.length-1;i>=0;i--){
//     result+=`"${str[i]}"`
//   if(i>0){
//       result+=","
//   }
// }
// console.log(result)



// Replace zeros to front................................................................................


// let arr=[0,2,5,0,3,4,0,1,0]
// let index=arr.length-1;
// for(let i=arr.length-1;i>0;i--){
//     if(arr[i]!==0){
//         [arr[i],arr[index]]=[arr[index],arr[i]]
//         index--
//     }
// }
// console.log(arr)



//Find Duplicates........................................................................................................


// let arr=[3,9,6,9,2,3,7]
// let result=[]
// let newArray=[]
// for(let i=0;i<arr.length;i++){
// let flag=0
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             flag=1
//             result[result.length]=arr[j]
//         }
        
//     }
//     if(flag==0){
//         newArray[newArray.length]=arr[i]
//     }
        
// }
// console.log(result)
// console.log(newArray)



//Find the kth largest................................................................................

// let arr=[10,3,6,7,9,8]
// let k=2
// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;j<arr.length;j++){
//        if(arr[i]<arr[j]){
//            [arr[i],arr[j]]=[arr[j],arr[i]]
//        }
       
//    }
//           if(i+1==k){
//               console.log(arr[i])
//           }
   
// }

// console.log(arr)



//Find the prime numbers between the number.......................................................

// let num=15
// for(let i=2;i<num;i++){
//    let  flag=0
//     for(let j=2;j<i;j++ ){
//     if(i%j==0 && i!==1){
//         flag=1
       
//     }
//     }
//     if(flag==0){
//         console.log(i)
//     }
// }


//split into two arrays...............................................................................

// let arr=[10,3,6,7,9,3,8]
// let left=[]
// let right=[]
// let mid=arr.length/2

// for(let i=0;i<arr.length;i++){
//     if(i<mid){
//         left[left.length]=arr[i]
//     }else{
//         right[right.length]=arr[i]
//     }
// }
// console.log(left)
// console.log(right)


//Remove the multiples of 2.................................................................................................

// let arr=[10,3,6,7,9,3,8]
// let result=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         result[result.length]=arr[i]
//     }
// }
// console.log(result)



//remove the elements after multiple of 5.................................................................................

// let arr=[10,3,6,7,90,6,8]
// let r=[]
// let s=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i-1]%5==0)
//    continue;
//        r[r.length]=arr[i]

// }
// console.log(r)


//find the prime numbers from an array and find the sum of the prime numbers. if the sum is greater than 50 remove the even numbers from the array and if the sum is less than 50 remove the odd numbers


// let arr = [1, 2, 3, 87, 95, 5, 6, 7, 9, 15, 84]
// let prime=[]
// let sum=0
// let Result=[]
// for(let i=0;i<arr.length;i++){
//     let flag=0;
//     if(i<2) continue;
//     for(let j=2;j<arr[i];j++){
//         if(arr[i]%j==0 && arr[i]!==1){
//             flag=1;
//         }
//     }
//     if(flag==0){
//         prime[prime.length]=arr[i]
//         sum+=arr[i]
//     }
    
// }
// for(let i=0;i<prime.length;i++){
//         if(sum>50 && prime[i]%2==0){
//             Result[Result.length]=prime[i]
//         }else if(sum<50 && prime[i]%2==1){
//             Result[Result.length]=prime[i]
//         }
        
//     }
// console.log(sum)
// console.log(Result)


//remove the even numbers from an array without using inbuilt methods

// let arr = [1, 2, 3, 87, 95, 5, 6, 7, 9, 15, 84]
// let result=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         result[result.length]=arr[i]
//     }
// }
// console.log(result)

//multiple of 7 using do while loop & While loop........................................................

// let i=1;
// do{
//     console.log(i*7)
//     i++
// }while(i<=10)


// let i=1
// while(i<=10){
//     console.log(i*7)
//     i++
// }

//Reverse the array within the array.................................................

// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
// for(let j=i+1;j<arr.length;j++){
//     [arr[i],arr[j]]=[arr[j],arr[i]]
// }
    
// }
// console.log(arr)



//Largest from 3 variable............................................................................................................

// let a=1;
// let b=12;
// let c=122;
// if(a>b && a>c){
//     console.log("largest",a)
// }else if(b>a && b>c){
//     console.log("largest",b)
// }else{
//         console.log("largest",c)

// }


// finding duplicate without using another array(deleting duplicates also)

// let arr=[1,2,3,2,4,4,6,7,8,6]
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             for(let k=j;k<arr.length;k++){
//                 arr[k]=arr[k+1]
//             }
//             arr.length--;
//             j--;
//         }
//     }
// }
// console.log(arr)

//Factorial using do-while loop................................................................................

// let num=1;
// let fact=1;
// let i=1;
// do{
//     fact*=i
//     i++
// }while(i<=num)
// console.log(fact)

//Find sum of digits in a number..........................................................................................

// let n=12;
// let sum=0;
// let str=n+""
// for(let i=0;i<str.length;i++){
//     sum+=str[i]-""
// }
// console.log(sum)


//vowels count..................................................................


// let a='aeiouAEIOU'
// let vowels='aeiouAEIOU'
// let count=0
// for(let i=0;i<a.length;i++){
//     for(j=0;j<vowels.length;j++){
//         if(a[i]==vowels[j]){
//             count++
//         }
//     }
// }
// console.log(count)

//palindrome...................................................................................................................

// let word="malayalam"
// let result=""
// for(let i=word.length-1;i>=0;i--){
//     result+=word[i]
// }
// console.log(result)
// console.log((result==word) ? "Palidrome":"Not palidrome")


//Reverse using while loop....................................................................................................


// let arr=[1,2,3,4,5]
// let start=0
// let end=arr.length-1;
// while(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     start++;
//     end--
// }
// console.log(arr)

//Sum using function....................................................................................................

// function a(){
//     b=12
//     c=23
//     d=123
//     return s(b,c,d)
// }
// function s(b,c,d){
//     console.log(b+c+d)
// }
// a()


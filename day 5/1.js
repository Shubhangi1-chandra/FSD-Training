/*function aa(){
    console.log("hello");
}
setTimeout(aa, 1000);

(function(){
 console.log("hello")  
})();//IIFE

let b= ()=> {
    console.log("hello");
}
function rollnumber(num,nextroll){
    setTimeout(() =>{
    console.log("Roll number is 123", num);
    if (nextroll) nextroll();
    },2000)
}rollnumber(rollnumber,2000,798789);
rollnumber(123, ()=>{
    rollnumber(123,2000);
})
//setTimeout(rollnumber,2000,798789);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve
    }, 1000)
});
promise.then(() => {
    console.log("hello")
}).catch(() => {
    console.log("ko")
})
promise.then(console.log);
let promise1 = function getPromise(){
    return new Promise((resolve, reject)=>{
        resolve("hi")
    });
}
promise1.then(result =>{
    console.log(result);

}
    
).then((res)=>{
    console.log(res);
}
function roll(num,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num);
        },delay)
    })
}
/*roll(123,4000).then(() =>{
    roll(123,4000).then(() =>{
        
    console.log("hello");
    })
}).catch(() =>{
 console.log("error")   
}
)
async function rollnumber(){
    let roll1 = await roll(123,4000);
    let roll2 = await roll(123,4000);
}
function food(item,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(item);
        },time)
    })}
    async function restaurent(){
        let food1 = await food('samosa',4000);
        let food2 = await food('pulav',4000);
    }*/
   let url = 'https://github.com/Shubhangi1-chandra/terris-game.git';
   let b = fetch(url)
   b.then((data)=>{
    console.log(data)
    return data.json();
   }).catch(() => {
    console.log("error")
   })
   async function gito(){
       let url = 'https://github.com/Shubhangi1-chandra/terris-game.git';
       let b = await fetch(url);
       let data = await b.json();
       console.log(data);
   }
   gito()
let p = 12345;
let u = prompt("enter password");


// if( p === Number(u)){
//     console.log("access");
// } else{
//     if(u === null){
//         console.error("you pressed cancel");
//     }else{
//         if(u.trim()=== ""){
//             console.error("enter something");
//         }else{
//             for(let count = 3;count>0;){
//                 u = prompt(`Wrong password! You have ${count} attempt${count > 1 ? "s" : ""} left:`);
                
//                 if(u === null){
//                     console.error("you pressed cancel");
//                     continue;
//                 }
                
//                 if(u.trim()=== ""){
//                     console.error("enter something");
//                     continue;
//                 }
                
//                 if( p === Number(u)){
//                     console.log("access");
//                     break;
//                 }else{
//                     count--;
//                     if(isNaN(u)){    
//                     } 
//                     if(count === 1) console.error("account blocked");
//                 }
                
//             }
//         }
//     }
// }



// let count = 3;
// if(p === u) console.log("access");
// while(p!==u){
//     if(count === 0) {
//         console.log("blocked");
//         break;
//     }
//     u = prompt(`Wrong password! You have ${count} attempt${count > 1 ? "s" : ""} left:`);
//     if(p === u) console.log("access");
//     count--;
// }

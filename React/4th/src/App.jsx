// import React, { useState } from 'react';

// const App = () => {
//   const [king, setKing] = useState('Rohit');
//   const [queen, setQueen] = useState('Shreya');

//   const changeKing = () => {
//     setKing('Hitesh');
//   };

//   const changeQueen = () => {
//     setQueen('Rani');
//   };
//   const handleChange = () => {
//     changeKing();
//     changeQueen();
//   };

//   return (
//     <div>
//       <h1>
//         {king}
//         {queen}
//       </h1>
//       <button onClick={handleChange}>Change</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
  
//   const [num, setNum] = useState(0)


//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={() =>{setNum(num-1)}}>Decrease</button>
//       <button onClick={() => {setNum(num+1)}}>Increase</button>
//       <button onClick={() => {setNum(num+Math.floor(Math.random()*10))}}>Jump</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {

  const [marks, setMarks] = useState([20,37,12,60,78,11,50,90])

  const giveGrace = () => {
    const newMarks = marks.map(function(elem){
      if(elem<33){
        return elem+(33-elem)
      }else{
        return elem
      }
    })
    setMarks(newMarks);
    
  } 

  return (
    <div>
      {marks.map(function(elem ,id){
        return <h1 key = {id}>Student {id+1} = {elem} ({elem>=33?"PASS":"FAIL"})</h1>
      })}
      <button onClick={giveGrace}>Give Grace</button>
    </div>
  )
}

export default App
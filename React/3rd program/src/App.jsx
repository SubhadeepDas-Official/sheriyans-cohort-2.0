import React from 'react';

const App = () => {
  const btnclicked = () => {
    console.log('Hello');
  };
  return (
    <div className="p-6">
      <button onClick={btnclicked} className="bg-amber-400 text-6xl p-5 rounded-2xl active:scale-95">
        Click to download
      </button>
    </div>
  );
};

export default App;

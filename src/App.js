// import './App.css';
// // import Campaign from './components/Campaign';
// import React, { useState } from 'react';
// import PracticeOne from './components/PracticeOne';
// import PracticeTwo from './components/PracticeTwo';
// // import ConditionalRender from './components/ConditionalRender';
// // import ConditionalState from './components/ConditionalState';

// function App() {
//   const [condition, setCondition] = useState('1번');

//   const onChange = () => {
//     condition == '1번' ? setCondition('2번') : setCondition('1번');
//   };

//   return (
//     <div className="App">
//       {condition === '1번' ? (
//         <PracticeOne condition={condition} />
//       ) : (
//         <PracticeTwo />
//       )}
//       <button onClick={onChange}>click</button>
//     </div>
//   );
// }

// export default App;

import './App.css';
// import Campaign from './components/Campaign';
import React, { useState } from 'react';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
// import ConditionalRender from './components/ConditionalRender';
// import ConditionalState from './components/ConditionalState';

function App() {
  const [condition, setCondition] = useState(true);

  const onChange = () => {
    setCondition(!condition);
    // condition == '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <div className="App">
      {condition ? <PracticeOne /> : <PracticeTwo />}
      <button onClick={onChange}>click</button>
    </div>
  );
}

export default App;

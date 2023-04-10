import MyButton from './components/MyButton';
import { useState } from 'react';
// // import './App.css'
// import Profile from './components/Profile';
// import ShoppingList from './components/ShoppingList';

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       {/* <img className="avatar" /> */}
//       <MyButton />
//       <Profile />
//       <ShoppingList />
//     </div>
//   );
// }

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
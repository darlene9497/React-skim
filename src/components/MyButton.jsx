function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

// import { useState } from 'react'

// function MyButton() {
//     const [count, setCount] = useState(0);
  
//     function handleClick() {
//       setCount(count + 1);
//     }
  
//     return (
//       <button onClick={handleClick}>
//         Clicked {count} times
//       </button>
//     );
//   }

// function MyButton() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

export default MyButton

// function AboutPage() {
//     return (
//       <>
//         <h1>About</h1>
//         <p>Hello there.<br />How do you do?</p>
//       </>
//     );
//   }

// export default AboutPage
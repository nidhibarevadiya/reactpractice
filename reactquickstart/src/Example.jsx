import React from 'react'
    // {/* create componenst */}
// function Example() {
//   return (
//   

//     <h1>I'am heading</h1>
//    
//   )
// }

// export default Example





// Creating and nesting components


// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }


// Writing markup with JSX   and add styles

//  function Example1() {
//   return (
//     <>
//     <h1 className="nidhihead">I'am nidhi</h1>
//     <p  className="nidhip" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, sed.</p>
//     </>
//   )
// }

// export default Example1

// Displaying data 

// const user = {
//   name: 'Nidhi Barevadiya',
//   imageUrl: 'https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }


// rendering condition


// function Achive() {
//   return <h1>Goal!</h1>;
// }

// function Notachive() {
//   return <h1>MISSED!</h1>;
// }

// export default function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <Achive/>;
//   }
//   return <Notachive/>;
// }


// rendering condition  Rendering lists 
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


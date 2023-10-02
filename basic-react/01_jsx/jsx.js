// Hello
let myElement = "Hello World";

// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);


// // Basic Rules
// myElement = "<h3>Hello React</h3>"; // wrong
// myElement = <h3>Hello React</h3>; // correct

// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);


// // Basic Rules
// // myElement = <img src="https://placehold.co/600x400" >; // wrong
// myElement = <img src="https://placehold.co/600x400" />; // correct

// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// // Basic Rules
// // myElement = (
// //     <p>Learn Javascript</p>
// //     <p>Learn React</p>
// // ); // wrong
// myElement = (
//     <div>
//         <p>Learn Javascript</p>
//         <p>Learn React</p>
//     </div>
// ); // correct

// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// // Statement in JSX
// let myText = "Learn React";
// myElement = (
//     <div>
//         <h3>{myText}</h3>
//     </div>
// );

// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// Array ProcessingA
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
); 

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

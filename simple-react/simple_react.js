// // Class Component
// class MyCounter extends React.Component {
//     // declarasi state untuk nilai awal count "0"
//     state = {
//         count: 0
//     };

//     // jumlah count +1
//     incrementCount = () => {
//         this.setState((countValue) => ({
//             count: countValue.count + 1
//         }));
//     }

//     decrementCount = () => {
//         this.setState((countValue) => ({
//             count: countValue.count - 1
//         }));
//     }

//     // jumlah count -1
//     render () {
//         return (
//             <>
//             <h1>{this.state.count}</h1> {/* Menampilkan jumlau count diatas tombol */}
//             <button onClick={this.decrementCount} style={{ margin: "0px" }}>-1</button> {/* Tombol -1, diambil dari decrementCount */}
//             <button onClick={this.incrementCount} style={{ margin: "0px" }}>+1</button> {/* Tombol +1, diambil dari incrementCount */}
//             </>
//         )
//     }
// }
// // hasil dipanggil
// const myElement = <MyCounter />;
// const myApp = myElement;
// ReactDOM.createRoot(document.getElementById('root')).render(myApp);

// Functional Component
const MyCounter = () => {
    // deklarasi nilai awal count "0"
    const [count, setCount] = React.useState(0);

     // jumlah count +1
    const incrementCount = () => {
        setCount(countValue => countValue + 1)
     }

    const decrementCount = () => {
        setCount(countValue => countValue - 1)
    }

    return (
        <>
        <h1>{count}</h1> {/* Menampilkan jumlau count diatas tombol */}
        <button onClick={decrementCount} style={{ margin: "0px" }}>-1</button> {/* Tombol -1, diambil dari decrementCount */}
        <button onClick={incrementCount} style={{ margin: "0px" }}>+1</button> {/* Tombol +1, diambil dari incrementCount */}
        </>
    )
}
// hasil dipanggil
const myElement = <MyCounter />;
const myApp = myElement;
ReactDOM.createRoot(document.getElementById('root')).render(myApp);

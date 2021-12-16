// const password = (password) =>
// (password.length >= 8 && password) ? alert('super strong password')
// :(password.length < 8 || password) ? alert('its strong enough')
// :alert('one more time click the button');

const password = prompt('please write your password');
if(password.length >= 12 && password.includes('@')){
    alert('super strong password'); 
} else if(password.length >= 8 || password) {
    alert('its strong enough'); 
} else{
    alert('one more time click the button');
}


// const bill = (products,tax) => {
//         let total = 0;
//         for(let i  = 0; i < products.length; i++){
//             total += products[i] + products[i] * tax;
//         }
//         return total;
//     }
//     console.log(bill([10,15,30],0.2));


//short style
/* const getLonger = (text1, text2) => 
(text1.length > text2.length) ? text1 
: (text1.length < text2.length) ? text2 
: null;

    // const getLonger = (text1, text2) => {
    //     if(text1.length > text2.length){
    //         return text1;
    //     }else if (text1.length < text2.length){
    //         return text2;
    //     }else {
    //         return null;
    //     }
    // }

    const promptGetLonger = () => {
        let te1 = prompt('please write something');
        let te2 = prompt('please write more');
        alert(getLonger(te1, te2));
    }

    let fine = 'vonn ryann'
    console.log(fine[7]); */
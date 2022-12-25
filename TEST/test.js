
console.log("This is Async test")

async function ABC()
{
    console.log('Inside ABC function');
    const response=await fetch('https://api.github.com/users');
    console.log('before response');
    const users =await response.json();
    console.log('users resdolved')
    return users;
}

console.log("before calling ABC");
let a=ABC();
console.log("after calling ABC");
console.log(a);
a.then(data=>console.log(data));
console.log("last line of this js file");


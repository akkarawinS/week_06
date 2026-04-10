const data1 = fetch('https://jsonplaceholder.typicode.com/todos/1');

console.log(data1);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        return data;

    })
    .catch((error)=>{

    });


data1.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
})
    .catch((error) => {
        console.error("Something went wrong!", error);
    });




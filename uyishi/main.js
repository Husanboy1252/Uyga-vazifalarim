const elbox = document.querySelector(".boxhtml");

// 1-mashiq "posts"===============================

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((item) => {
//       Routeposts(item);
//     });
//   })
//   .catch((error) => console.log(error.message));

// function Routeposts(data) {
//   const html = `
//      <article>
//     <h4>ID:${data.id}</h4>
//     <p>titel: ${data.title}</p>
//     <p>body:${data.body}</p>
//   </article>
//   `;
//   elbox.innerHTML += html;
// }

// Routeposts();

// 2-mashiq comments==================================

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//   .then((res) => res.json())
//   .then((coment) => {
//     coment.forEach((item) => {
//       comments(item);
//     });
//   })
//   .catch((error) => console.log(error.message));

// function comments(coment) {
//     const html = `
//    <h3>ID:${coment.id}</h3>
// <h4>name:${coment.name}</h4>
// <p>email:${coment.email}</p>
// <p>body:${coment.body}</p>
// </article>
//     `
//     elbox.innerHTML += html
// }
// comments()

// 3- mashiq albums=================================

// fetch(`https://jsonplaceholder.typicode.com/albums`)
// .then((res)=> res.json())
// .then((album) =>{
//     album .forEach(item => {
//         Albums(item)
//     });
// })
// .catch((error) => console.log(error.message))

// function Albums( album) {
//      const html = `
//      <article>
//     <h4>ID:${album.userId}</h4>
//     <p>titel: ${album.id}</p>
//     <p>body:${album.title}</p>
//   </article>
//   `;
//   elbox.innerHTML += html;
// }
// Albums()

// 4-mashq phatos======================================

// fetch(`https://jsonplaceholder.typicode.com/photos`)
//   .then((res) => res.json())
//   .then((images) => {
//     images.forEach((item) => {
//       Phatos(item);
//     });
//   })
//   .catch((error) => console.log(error.message))

// function Phatos(rasim) {
//   const html = `
//      <article>
//     <h4>ID:${rasim.id}</h4>
//     <p>titel: ${rasim.title}</p>
//     <p>url:${rasim.url}</p>
//     <img src="https://picsum.phtos/200?random" />
//     </article>
//     `
//   elbox.innerHTML += html;
// }
// Phatos();



// 5 -mashq=----------------------------------
// fetch(`https://jsonplaceholder.typicode.com/todos`)
// .then((res)=> res.json())
// .then((malumot)=> {
//   malumot.forEach(item => {
//     ABS(item)
//   });
// })
// .catch((error) => console.log(error.message))

// function ABS(todos) {
//   const html= `
//      <article>
//         <h4>id:${todos.id}</h4>
//         <p>title:${todos.title}</p>
//         <p>complet:${todos.completed}</p>
//       </article>
//       `
//       elbox.innerHTML += html
// }
// ABS()


// // 6-mashq====================================

// fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res)=> res.json())
// .then ((resul)=> {
//   resul.forEach(item => {
//     name(item)
    
//   });
// })
// .catch((error) => console.log(error.message))


// function name(user) {
//   const html =`
//         <article>
//        <h3>id:${user.id}</h3>
//         <h4>name:${user.name}</h4>
//         <h4>Username:${user.username} </h4>
//         <h5>email:${user.email} </h5>
//         <h5>adres:${user.address} </h5>
//         <p>street:${user.street} </p>
//         <p>suite:${user.suite} </p>
//         <p>city:${user.city}</p>
//         <p>zipcode:${user.zipcode}</p>
//         <p>geo:${user.geo}</p>
        

//       </article>
//   `
//   elbox.innerHTML += html
// }
// name()

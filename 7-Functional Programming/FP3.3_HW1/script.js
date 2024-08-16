//The reduce() method can be used to group data by a specific property
const movies = [
  { id: 1, title: 'Movie 1', genre: 'action' },
  { id: 2, title: 'Movie 2', genre: 'drama' },
  { id: 3, title: 'Movie 3', genre: 'action' },
  { id: 4, title: 'Movie 4', genre: 'comedy' },
];

const movieListContainer = document.querySelector('#movieList');
const genreGroupsContainer = document.querySelector('#genreGroups');

const movieList = movies.reduce((acc, curr) => {
  //display movies
  const listItem = document.createElement('li');
  listItem.textContent = `${curr.title} - Genre: ${curr.genre}`;

  movieListContainer.appendChild(listItem);

  //show movies based on genre
  // if genre found, keep as it if no create array, then push title
  acc[curr.genre] = acc[curr.genre] ? acc[curr.genre] : [];
  acc[curr.genre].push(curr.title);
  // if(!acc[curr.genre]){
  //     acc[curr.genre] = []
  // }
  // acc[curr.genre].push(curr.title)

  console.log(curr, acc);
  return acc;
}, {});

console.log(movieList);
//for in loop to iterate over object
// for(property in movieList){
//     console.log(`${property} : ${movieList[property]}`)
// }

// let item = ''
// for(const genre in movieList){
//     console.log(`${genre} : ${movieList[genre]}`)
//     item = item + `
//     <div>
//     <strong>Genre: </strong>${genre}<br>
//     <strong>Movies: </strong>${movieList[genre].join(', ')}
//     <hr>
//     </div>
//     `
// }
//  genreGroupsContainer.innerHTML = item

Object.keys(movieList).forEach((genre) => {
  const element = document.createElement('div');
  element.innerHTML = `
    <strong>Genre: </strong>${genre}<br>
  <strong>Movies: </strong>${movieList[genre].join(', ')}
    <hr>
    `;
  genreGroupsContainer.appendChild(element);
});

import React from 'react';

import PropTypes from 'prop-types';

//#region
const foodILike = [
  {
    // REVIEW id는 key를 나타내기 위해서 필수, react에서는 안하면안됨
    id: 1,
    name: 'Kimchi',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._SZP4BmNnUbpbwOpSzrz5gHaE7%26pid%3DApi&f=1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'samgyupsal',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1.jpg',
    rating: 4.9,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1> I like {name} </h1>
      <img src={picture} alt={name} />
      <h2>{rating}</h2>
    </div>
  );
}

// 영화를 가져올때 다 확인할거임
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      rating={dish.rating}
      picture={dish.image}
    />
  );
}

function App() {
  return <div className="App">{foodILike.map(renderFood)}</div>;
}

export default App;

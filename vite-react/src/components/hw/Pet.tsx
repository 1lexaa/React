import React from 'react';

function Pet(props) {
  const { pet } = props;

  return (
    <>
    <h1>My pet</h1>
    <div>
      <h2>{pet.name}</h2>
      <p>Age: {pet.age}</p>
      <p>Breed: {pet.breed}</p>
      <p>Favorite Food: {pet.favoriteFood}</p>
      <p>Color: {pet.color}</p>
    </div>
    </>
  );
}

export default Pet;

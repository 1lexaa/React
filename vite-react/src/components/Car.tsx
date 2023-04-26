import cars from "../modules/Car";
const Car = () => {
  return (
    <>
      {cars.map((el) => (
        <p key={el.id}>
          {el.model} {el.price} {el.year}
        </p>
      ))}
    </>
  );
};

export default Car;
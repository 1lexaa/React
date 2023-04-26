const Film = (props:any) => {
  
    return (
        <>
      <h1>Films</h1>

      <ul>
        <li>{props.name}</li>
        <li>{props.fio}</li>
        <li>{props.year}</li>
        <li>{props.studio}</li>
        <li>{props.poster}</li>
      </ul>
      </>
    );
}

export default Film;
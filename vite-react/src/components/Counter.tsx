const Counter = (props:any) => {
    console.log(props)
    const {text,data} = props;
      return (
        <>
         <h2>
          {data} {text}
         </h2>
        </>
      );
    };
    export default Counter;
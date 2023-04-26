function Bio (props:any) {
  
    return (
        <>
        <h1>О себе</h1>
        
            <div>{props.name}</div>
            <div>{props.number}</div>
            <div>{props.mail}</div>
            <div>{props.city}</div>
            <div>{props.work}</div>
            <div>{props.skill}</div>
            <div>{props.img}</div>
            
            
        </>

    );
   
}



export default Bio
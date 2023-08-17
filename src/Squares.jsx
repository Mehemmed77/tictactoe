export default function Square(props){
    
    const handleClick = () => {
        console.log(props.id);
    };

    return(
        <>
            <div className="cell" onClick={handleClick}>
                
            </div>
        </>
    );
};
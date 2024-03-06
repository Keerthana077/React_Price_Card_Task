export const Benefits = (props) =>{
    let val = props.val;
    let s = props.s;
    console.log(val,s)
    if(val == "true"){
        return(
            <>
                < i className="fa-solid fa-check"></i> {s}
            </>
        )
        
    } else {
        return(
            <>
                <span className="text-muted"><i className="fa-solid fa-xmark"></i>{s}</span>
            </>
        )
        
    }
    
}
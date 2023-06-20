

export default function Card(props){
    return(
        <div className="card">
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.price}</p>

        </div>
    )
}
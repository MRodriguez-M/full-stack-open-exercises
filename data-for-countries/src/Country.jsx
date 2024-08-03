const Country = (props) => {

    return (
    <div>
        <h1>{props.country.name.common}</h1>
        <p>capital {props.country.capital}</p>
        <p>area {props.country.area}</p>
        <b>languages:</b>
        <ul>
            {Object.keys(props.country.languages).map(lan => <li>{props.country.languages[lan]}</li>)}
        </ul>
        <img src={props.country.flags.png} />
    </div>
    )
}

export default Country
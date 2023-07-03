function CardDark(props) {
    
    return (
        <section className='container-sun'>
            <div className='box-dark'>
                <div className='head-dark'>
                    <h1>{props.temp}</h1>
                    <img src={props.icon} className="icon"/>
                </div>    

                <div className='text-dark'>
                    <p><span>VIENTO:  </span>{props.wind}</p> 
                    <p><span>NUBES:  </span>{props.cloud}</p> 
                    <p><span>PRESIÓN:  </span>{props.pre}</p> 
                </div>
        
                <div className='foot-dark'>
                    <h3>{props.name}, {props.sys}</h3>
                    <div className="foot-text-dark">
                        <p>{props.wea}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default CardDark
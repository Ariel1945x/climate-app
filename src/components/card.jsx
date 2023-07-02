function Card(props) {
    
    return (
        <section className='container-sun'>
            <div className='box-sun'>
                <div className='head-sun'>
                    <h1>{props.temp}</h1>
                    <img src={props.icon} className="icon"/>
                </div>    

                <div className='text-sun'>
                    <p><span>VIENTO:  </span>{props.wind}</p> 
                    <p><span>NUBES:  </span>{props.cloud}</p> 
                    <p><span>PRESIÓN:  </span>{props.pre}</p> 
                </div>
        
                <div className='foot-sun'>
                    <h3>{props.name}, {props.sys}</h3>
                    <div className="foot-text">
                        <p>{props.wea}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Card
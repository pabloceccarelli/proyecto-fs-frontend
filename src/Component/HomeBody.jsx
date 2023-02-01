import UncontrolledExample from "./HomeCarrouselLeft";
import UncontrolledExample2 from "./HomeCarrouselRight";
const HomeBody = (props) => {
    return (
        <>
            {/* <p>{props.valor}</p>
            <p>{props.saludo}</p> */}
            
            <section className="container">
                <div className="row">
                <UncontrolledExample />
                
                <UncontrolledExample2/>

                </div>



            </section>
            {/* <p>{props.valor2}</p> */}
        </>
    )
}

export default HomeBody;
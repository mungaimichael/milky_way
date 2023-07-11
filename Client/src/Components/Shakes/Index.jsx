import { IndProduct } from "../Creams/Index"

const Index = () => {
    return (
        <div className="  h-screen absolute font-primary  md:h-auto md:relative " >
            <div className="flex flex-col justify-around items-center h-full md:flex-row md:items-start w-full  " >
                {/* Single Item Container  */}
                <IndProduct

                    heading={"Banana Chocolate"}
                    img={4}
                    description={"Indulge in the rich, velvety chocolate goodness swirled with ripe banana chunks. It's a flavor explosion that will make your taste buds do a happy dance."}
                />
                <IndProduct
                    heading={"Banana Chocolate"}
                    img={3}
                    description={"Indulge in the rich, velvety chocolate goodness swirled with ripe banana chunks. It's a flavor explosion that will make your taste buds do a happy dance."}
                />
                <IndProduct
                    heading={"Banana Chocolate"}
                    img={'hero'}
                    description={"Indulge in the rich, velvety chocolate goodness swirled with ripe banana chunks. It's a flavor explosion that will make your taste buds do a happy dance."}
                />
            </div>
        </div>
    )
}

export default Index
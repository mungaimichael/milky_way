import { IndProduct } from "../Creams/Index"

const Index = () => {
    return (
        <div className="  h-full bg-background font-primary" >
            <div className="flex flex-col justify-evenly items-center h-full md:flex-row md:items-start w-full  " >
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
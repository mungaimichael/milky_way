/* eslint-disable react/no-unescaped-entities */

const Index = () => {
    return (
        <div className=" absolute bg-background top-[200vh] w-full h-screen font-primary md:h-auto md:relative md:top-0 " >
            <div className="w-full h-full">
                <div className="flex flex-col justify-around items-center h-full md:flex-row md:items-start w-full  " >
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
        </div>
    )
}

export default Index




// eslint-disable-next-line react/prop-types
export const IndProduct = ({ heading, img, description }) => {
    return (
        <div className=" font-primary " >
            <div className="flex flex-col justify-around items-center h-full md:flex-row md:items-start w-full  " >
                {/* Single Item Container  */}
                <div className="flex flex-col items-start">
                    <div className="flex flex-col  self-start md:self-center  justify-center items-center w-20 h-20 md:w-60 md:h-60 rounded-full bg-red-100 relative">
                        <img src={`/images/${img}.png`} alt="" className="w-8 md:w-auto md:h-60 md:p-5  " />
                    </div>
                    <div className="w-full flex flex-col text-primary items-start px-2">
                        <h1 className="text-sm font-black  text-center md:text-xl lg:text-3xl lg:pl-3">{heading}</h1>
                        <p className=" text-xs font-regular md:w-5/6 align-center lg:p-3 md:text-[18px] md:font-light  " >
                            {description}
                        </p>
                    </div>
                    <div className="flex px-2 justify-around w-1/6   ">
                        <img src="/images/add.svg" alt="" className="w-8 hover:cursor-pointer " />
                        <div className="flex flex-1 items-center justify-end">
                            <p className="font-bold ml-2 text-primary " >4.2</p>
                            <img src="/images/star.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

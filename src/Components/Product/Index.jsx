/* eslint-disable react/no-unescaped-entities */

const Index = () => {
    return (
        <div className="w-full h-full bg-background  font-primary" >
            <div className="rounded-br-full rounded-tl-full w-full h-full bg-secondary md:rounded-none md:h-5/6 ">
                <div className="flex flex-col justify-around items-center h-full md:flex-row md:items-start w-full  " >
                    {/* Single Item Container  */}

                    <div className="flex flex-col gap-y-1 items-start">
                        <div className="flex flex-col self-center  justify-center items-center w-32 h-32 md:w-60 md:h-60 rounded-full bg-red-100 relative">
                            <img src="/images/3.png" alt="" className="w-12 md:w-auto md:h-60 md:absolute md:-top-10" />
                        </div>
                        <div className="w-full flex flex-col text-primary items-start px-2">
                            <h1 className="text-lg font-black  text-center">Choco Nana Bonanza</h1>
                            <p className=" text-xs font-regular" >
                                Indulge in the rich, velvety chocolate
                                goodness swirled with ripe banana chunks.
                                It's a flavor explosion that will make
                                your taste buds do a happy dance.
                            </p>
                        </div>
                        <div className="flex px-2 ">
                            <img src="/images/add.svg" alt="" className="w-5" />
                            <div className="flex items-center w-full">
                                <p>4.2</p>
                                <img src="/images/star.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 items-start">
                        <div className="flex flex-col self-center  justify-center items-center w-32 h-32 md:w-60 md:h-60 rounded-full bg-red-100 relative">
                            <img src="/images/2.png" alt="" className="w-12 md:w-auto md:h-72 md:absolute md:-top-10" />
                        </div>
                        <div className="w-full flex flex-col text-primary items-start px-2">
                            <h1 className="text-lg font-black  text-center">Choco Nana Bonanza</h1>
                            <p className=" text-xs font-regular md:font-bold " >
                                Indulge in the rich, velvety chocolate
                                goodness swirled with ripe banana chunks.
                                It's a flavor explosion that will make
                                your taste buds do a happy dance.
                            </p>
                        </div>
                        <div className="flex px-2 ">
                            <img src="/images/add.svg" alt="" className="w-5" />
                            <div className="flex items-center w-full">
                                <p>4.2</p>
                                <img src="/images/star.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 items-start">
                        <div className="flex flex-col self-center  justify-center items-center w-32 h-32 md:w-60 md:h-60 rounded-full bg-red-100 relative">
                            <img src="/images/4.png" alt="" className="w-12 md:w-auto md:h-60 md:absolute md:-top-10" />
                        </div>
                        <div className="w-full flex flex-col text-primary items-start px-2">
                            <h1 className="text-lg font-black  text-center">Choco Nana Bonanza</h1>
                            <p className=" text-xs font-regular" >
                                Indulge in the rich, velvety chocolate
                                goodness swirled with ripe banana chunks.
                                It's a flavor explosion that will make
                                your taste buds do a happy dance.
                            </p>
                        </div>
                        <div className="flex px-2 ">
                            <img src="/images/add.svg" alt="" className="w-5" />
                            <div className="flex items-center w-full">
                                <p>4.2</p>
                                <img src="/images/star.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
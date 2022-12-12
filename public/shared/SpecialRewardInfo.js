function SpecialRewardInfo ({ rewardName, amount, image, color }) {

    const divBorder = {
        borderLeft: `2px solid ${color}`
    }

    const headerColor = {
        background:`${color}`
    }
    
    return (
        <div className="my-1 w-[100%]">
            <div className="w-[100%] h-[30px] flex justify-between items-center px-3 text-[16px] rounded-[50px] mb-2 drop-shadow-xl" style={headerColor}>
                <h1 className="uppercase font-bold">{rewardName}</h1>
                <h1>Số lượng : {amount}</h1>
            </div>

            <div className="w-[100%] h-[120px] flex overflow-x-auto overflow-y-hidden" style={divBorder}>
                <div className="w-full h-[100px] flex">
                    {
                        image.map((item, index) =>
                        {
                            return(
                                <img alt={index} key={index} src={item} width={"100px"} height={"100px"} className="rounded-[5px] mx-[10px] drop-shadow-lg"/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SpecialRewardInfo
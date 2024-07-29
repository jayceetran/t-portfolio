export default function Products() {
    return (
        <div className="pt-28 flex flex-col items-center">
            <div>
                <p className="text-secondary font-bold text-4xl text-shadow">Our Products</p>
            </div>
            <div className="w-full flex flex-wrap p-5 gap-7 justify-center">
                <div className="w-full lg:w-[23%] md:w-1/3 sm:w-2/4 flex justify-center">
                    <div className="w-[300px]">
                        <img src="./assets/products/product-1.png"></img>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] md:w-1/3 sm:w-2/4 flex justify-center">
                    <div className="w-[300px]">
                        <img src="./assets/products/product-2.png"></img>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] md:w-1/3 sm:w-2/4 flex justify-center">
                    <div className="w-[300px]">
                        <img src="./assets/products/product-1.png"></img>
                    </div>
                </div>
                <div className="w-full lg:w-[23%] md:w-1/3 sm:w-2/4 flex justify-center">
                    <div className="w-[300px]">
                        <img src="./assets/products/product-1.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
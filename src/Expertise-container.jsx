



function ExpertiseContainer() {
    return <section className="flex flex-col justify-evenly items-center w-full px-5 h-96 mb-2">
        <div className="exp-img-div mx-auto my-5"></div>
        <div className="flex flex-col items-center">
            <h2 className="mb-3 text-2xl font-bold">EXPERTISE</h2>
            <div className="divider"></div>
            <div className="exp-btns mb-5">
                <button className="sec-btn bg-orange-500 border-orange-500 px-7 text-[12px]">Industries</button>
                <button className="sec-btn  bg-orange-500 border-orange-500 px-7 text-[12px]">Practices</button>
            </div>
        </div>
    </section>
}

export default ExpertiseContainer;
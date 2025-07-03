import useAccountSetupState from "../zustand/useAccountSetupState"


const StepsBar = () => {

    const {stepNumber} = useAccountSetupState();

    return (
        <section id='stepsSection' className='flex flex-col p-6 justify-start items-start gap-7'>
            <div className="step">
                <div className={`stepNumber ${stepNumber === 1 ? "activeCircle" : ""}`}>1</div>
                <div>
                    <p className='text-xs'>STEP 1</p>
                    <h3 className='font-bold text-white'>YOUR INFO</h3>
                </div>
            </div>
            <div className="step">
                <div className={`stepNumber ${stepNumber === 2 ? "activeCircle" : ""}`}>2</div>
                <div>
                    <p className='text-xs'>STEP 2</p>
                    <h3 className='font-bold text-white'>SELECT PLAN</h3>
                </div>
            </div>
            <div className="step">
                <div className={`stepNumber ${stepNumber === 3 ? "activeCircle" : ""}`}>3</div>
                <div>
                    <p className='text-xs'>STEP 3</p>
                    <h3 className='font-bold text-white'>ADD-ONS</h3>
                </div>
            </div>
            <div className="step">
                <div className={`stepNumber ${stepNumber === 4 ? "activeCircle" : ""}`}>4</div>
                <div>
                    <p className='text-xs'>STEP 4</p>
                    <h3 className='font-bold text-white'>SUMMARY</h3>
                </div>
            </div>
        </section>
    )
}

export default StepsBar
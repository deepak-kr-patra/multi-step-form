import useAccountSetupState from "../zustand/useAccountSetupState"
import BackBtn from "./buttons/BackBtn"
import SelectedPlansAndAddOns from "./SelectedPlansAndAddOns"


const FinishingUp = () => {

    const { setStepNumber } = useAccountSetupState();

    return (
        <section
            id="finishingUpSection"
            className="relative w-full h-full flex flex-col justify-between sm:px-3 md:px-6 lg:px-16"
        >
            <section className="liftedElement gap-4 sm:gap-6 px-6 py-8 sm:p-0 bg-white">
                <div className="stepHeadingDiv sm:mb-2">
                    <h1 className="text-2xl sm:text-4xl stepHeading">Finishing up</h1>
                    <p className="stepText">Double-check everything looks OK before confirming.</p>
                </div>

                <SelectedPlansAndAddOns />
            </section>

            <div className="buttonsDiv justify-between bg-white py-4 sm:p-0">
                <BackBtn />
                <button
                    className="min-h-10 h-max bg-[var(--purple-600)] hover:bg-[var(--purple-600-h)] text-[var(--white)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
                    onClick={() => setStepNumber(5)}
                >
                    Confirm
                </button>
            </div>
        </section>
    )
}

export default FinishingUp
import useAccountSetupState from "../zustand/useAccountSetupState";
import AddOnsCardsSection from "./AddOnsCardsSection";
import BackBtn from "./buttons/BackBtn"


const AddOns = () => {

    const { setStepNumber } = useAccountSetupState();

    return (
        <section
            id="addOnsSection"
            className="relative w-full h-full flex flex-col justify-between sm:px-3 md:px-6 lg:px-16"
        >
            <section className="liftedElement gap-4 sm:gap-6 px-6 py-8 sm:p-0 bg-white">
                <div className="stepHeadingDiv sm:mb-2">
                    <h1 className="text-2xl sm:text-4xl stepHeading">Pick add-ons</h1>
                    <p className="stepText">Add-ons help enhance your gaming experience.</p>
                </div>

                <AddOnsCardsSection />
            </section>

            <div className="buttonsDiv justify-between bg-white py-4 sm:p-0">
                <BackBtn />
                <button
                    className="min-h-10 h-max bg-[var(--blue-950)] hover:bg-[var(--blue-950-h)] text-[var(--blue-200)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
                    onClick={() => setStepNumber(4)}
                >
                    Next Step
                </button>
            </div>
        </section>
    )
}

export default AddOns
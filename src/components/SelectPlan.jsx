import toast from "react-hot-toast";
import useAccountSetupState from "../zustand/useAccountSetupState";
import BackBtn from "./buttons/BackBtn"
import MonthlyPlanCardsSection from "./MonthlyPlanCardsSection";
import YearlyPlanCardsSection from "./YearlyPlanCardsSection";


const SelectPlan = () => {

    const {
        setStepNumber,
        subscriptionMode,
        setSubscriptionMode,
        selectedPlanID,
        setSelectedPlanID
    } = useAccountSetupState();

    const toggleMode = () => {
        subscriptionMode === "monthly"
            ? setSubscriptionMode("yearly")
            : setSubscriptionMode("monthly");

        setSelectedPlanID(null);
    }

    const handleNext = () => {
        if (selectedPlanID === null) {
            toast.error('Select a plan first.')
            return;
        }
        setStepNumber(3);
    }

    return (
        <section
            id="selectPlanSection"
            className="relative w-full h-full flex flex-col justify-between sm:px-3 md:px-6 lg:px-16"
        >
            <section className="liftedElement gap-4 sm:gap-6 px-6 py-8 sm:p-0 bg-white">
                <div className="stepHeadingDiv sm:mb-2">
                    <h1 className="text-2xl sm:text-4xl stepHeading">Select your plan</h1>
                    <p className="stepText">You have the option of monthly or yearly billing.</p>
                </div>

                {subscriptionMode === "monthly" && <MonthlyPlanCardsSection />}
                {subscriptionMode === "yearly" && <YearlyPlanCardsSection />}

                <section className="w-full flex justify-center items-center p-3 gap-4 bg-[var(--blue-50)] rounded-md">
                    <span
                        id="monthlyMode"
                        className={`subscriptionMode ${subscriptionMode === "monthly" ? "chosenMode" : ""}`}
                    >
                        Monthly
                    </span>
                    <input
                        type="checkbox"
                        className="toggle scale-75 md:scale-90 border-[var(--blue-950)] bg-white [--tglbg:var(--blue-950)] hover:bg-white"
                        onChange={() => toggleMode()}
                        checked={subscriptionMode === "yearly"}
                    />
                    <span
                        id="yearlyMode"
                        className={`subscriptionMode ${subscriptionMode === "yearly" ? "chosenMode" : ""}`}
                    >
                        Yearly
                    </span>
                </section>
            </section>

            <div className="buttonsDiv justify-between bg-white py-4 sm:p-0">
                <BackBtn />
                <button
                    className="min-h-10 h-max bg-[var(--blue-950)] hover:bg-[var(--blue-950-h)] text-[var(--blue-200)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
                    onClick={() => handleNext()}
                >
                    Next Step
                </button>
            </div>
        </section>
    )
}

export default SelectPlan
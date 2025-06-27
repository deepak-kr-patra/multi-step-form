import useAccountSetupState from "../zustand/useAccountSetupState";
import BackBtn from "./buttons/BackBtn"
import MonthlyPlanCardsSection from "./MonthlyPlanCardsSection";
import YearlyPlanCardsSection from "./YearlyPlanCardsSection";


const SelectPlan = () => {

    const {
        stepNumber,
        setStepNumber,
        subscriptionMode,
        setSubscriptionMode,
        selectedPlanID,
        setSelectedPlanID
    } = useAccountSetupState();

    const toggleMode = () => {
        let toggleButton = document.getElementById('chooseMode');
        let monthlyMode = document.getElementById("monthlyMode");
        let yearlyMode = document.getElementById("yearlyMode");

        if (toggleButton.checked) {
            monthlyMode.classList.remove('chosenMode');
            yearlyMode.classList.add('chosenMode');
            setSubscriptionMode("yearly");
        } else {
            yearlyMode.classList.remove('chosenMode');
            monthlyMode.classList.add('chosenMode');
            setSubscriptionMode("monthly");
        }
        setSelectedPlanID(null);
    }

    const selectPlan = (id) => {
        // let planCards = document.querySelectorAll('.planCard');
        // planCards.forEach(planCard => planCard.classList.remove('selectedCard'));
        if (selectedPlanID !== null) {
            document.getElementById(selectedPlanID).classList.remove('selectedCard');
        }
        setSelectedPlanID(id);
        let selectedPlan = document.getElementById(id);
        selectedPlan.classList.add('selectedCard');
    }

    const handleNext = () => {
        if (selectedPlanID === null) {
            console.log("select a plan first");
            return;
        }
        setStepNumber(stepNumber + 1);
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

                {subscriptionMode === "monthly" && <MonthlyPlanCardsSection selectPlan={selectPlan} />}
                {subscriptionMode === "yearly" && <YearlyPlanCardsSection selectPlan={selectPlan} />}

                <section
                    // id="modeChooseBox"
                    className="w-full flex justify-center items-center p-3 gap-5 bg-[var(--blue-100)] rounded-md"
                >
                    <span id="monthlyMode" className="subscriptionMode chosenMode">Monthly</span>
                    <input
                        id="chooseMode"
                        type="checkbox"
                        className="toggle scale-90 border-[var(--blue-950)] bg-white [--tglbg:var(--blue-950)] hover:bg-white"
                        onClick={toggleMode}
                    />
                    <span id="yearlyMode" className="subscriptionMode">Yearly</span>
                </section>
            </section>

            <div className="buttonsDiv justify-between bg-white py-4 sm:p-0">
                <BackBtn />
                <button
                    className="min-h-10 h-max bg-[var(--blue-950)] hover:bg-[var(--purple-600)] text-[var(--blue-200)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
                    onClick={() => handleNext()}
                >
                    Next Step
                </button>
            </div>
        </section>
    )
}

export default SelectPlan
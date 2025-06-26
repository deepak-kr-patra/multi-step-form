import useAccountSetupState from "../zustand/useAccountSetupState";
import BackBtn from "./buttons/BackBtn"
import NextStepBtn from "./buttons/NextStepBtn"
import MonthlyPlanCardsSection from "./MonthlyPlanCardsSection";
import YearlyPlanCardsSection from "./YearlyPlanCardsSection";


const SelectPlan = () => {

    const { subscriptionMode, setSubscriptionMode } = useAccountSetupState();

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

                {/* <section
                    // id="planCardsSection"
                    className="flex flex-col sm:flex-row justify-between gap-4"
                >
                    <div className="planCard">
                        <div className="image-div arcade-image-div"></div>
                        <div>
                            <h3 className="font-bold text-[var(--purple-950)]">Arcade</h3>
                            {
                                subscriptionMode === "monthly" &&
                                <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$9/mo</p>
                            }
                            {
                                subscriptionMode === "yearly" &&
                                <>
                                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$90/yr</p>
                                    <p className="text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                                </>
                            }
                        </div>
                    </div>
                    <div className="planCard">
                        <div className="image-div advanced-image-div"></div>
                        <div>
                            <h3 className="font-bold text-[var(--purple-950)]">Advanced</h3>
                            <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$12/mo</p>
                            <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$120/yr</p>
                            <p className="text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                        </div>
                    </div>
                    <div className="planCard">
                        <div className="image-div pro-image-div"></div>
                        <div>
                            <h3 className="font-bold text-[var(--purple-950)]">Pro</h3>
                            <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$15/mo</p>
                            <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$150/yr</p>
                            <p className="text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                        </div>
                    </div>
                </section> */}

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
                <NextStepBtn />
            </div>
        </section>
    )
}

export default SelectPlan
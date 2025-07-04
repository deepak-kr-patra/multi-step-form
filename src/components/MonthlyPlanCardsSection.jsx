import useAccountSetupState from "../zustand/useAccountSetupState"


const MonthlyPlanCardsSection = ({ selectPlan }) => {

    const { selectedPlanID } = useAccountSetupState();

    return (
        <section
            // id="planCardsSection"
            className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4"
        >
            <div
                id="monthlyArcade"
                className={`planCard ${selectedPlanID === "monthlyArcade" ? "selectedPlanCard" : ""}`}
                onClick={() => selectPlan('monthlyArcade')}
            >
                <img src="/images/icon-arcade.svg" alt="arcade icon" className="planIcon" />
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Arcade</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$9/mo</p>
                </div>
            </div>
            <div
                id="monthlyAdvanced"
                className={`planCard ${selectedPlanID === "monthlyAdvanced" ? "selectedPlanCard" : ""}`}
                onClick={() => selectPlan('monthlyAdvanced')}
            >
                <img src="/images/icon-advanced.svg" alt="advanced icon" className="planIcon" />
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Advanced</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$12/mo</p>
                </div>
            </div>
            <div
                id="monthlyPro"
                className={`planCard ${selectedPlanID === "monthlyPro" ? "selectedPlanCard" : ""}`}
                onClick={() => selectPlan('monthlyPro')}
            >
                <img src="/images/icon-pro.svg" alt="pro icon" className="planIcon" />
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Pro</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$15/mo</p>
                </div>
            </div>
        </section>
    )
}

export default MonthlyPlanCardsSection
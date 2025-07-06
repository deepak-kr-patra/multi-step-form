import useAccountSetupState from "../zustand/useAccountSetupState"


const MonthlyPlanCardsSection = () => {

    const { selectedPlanID, setSelectedPlanID } = useAccountSetupState();

    return (
        <section className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4"        >
            <div
                id="monthlyArcade"
                className={`planCard ${selectedPlanID === "monthlyArcade" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('monthlyArcade')}
            >
                <img src="/images/icon-arcade.svg" alt="arcade icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Arcade</h3>
                    <p className="price text-[var(--grey-500)]">$9/mo</p>
                </div>
            </div>
            <div
                id="monthlyAdvanced"
                className={`planCard ${selectedPlanID === "monthlyAdvanced" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('monthlyAdvanced')}
            >
                <img src="/images/icon-advanced.svg" alt="advanced icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Advanced</h3>
                    <p className="price text-[var(--grey-500)]">$12/mo</p>
                </div>
            </div>
            <div
                id="monthlyPro"
                className={`planCard ${selectedPlanID === "monthlyPro" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('monthlyPro')}
            >
                <img src="/images/icon-pro.svg" alt="pro icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Pro</h3>
                    <p className="price text-[var(--grey-500)]">$15/mo</p>
                </div>
            </div>
        </section>
    )
}

export default MonthlyPlanCardsSection
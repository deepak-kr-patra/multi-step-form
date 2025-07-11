import useAccountSetupState from "../zustand/useAccountSetupState"


const YearlyPlanCardsSection = () => {

    const { selectedPlanID, setSelectedPlanID } = useAccountSetupState();

    return (
        <section className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4"        >
            <div
                id="yearlyArcade"
                className={`planCard ${selectedPlanID === "yearlyArcade" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('yearlyArcade')}
            >
                <img src="/images/icon-arcade.svg" alt="arcade icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Arcade</h3>
                    <p className="price text-[var(--grey-500)]">$90/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div
                id="yearlyAdvanced"
                className={`planCard ${selectedPlanID === "yearlyAdvanced" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('yearlyAdvanced')}
            >
                <img src="/images/icon-advanced.svg" alt="advanced icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Advanced</h3>
                    <p className="price text-[var(--grey-500)]">$120/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div
                id="yearlyPro"
                className={`planCard ${selectedPlanID === "yearlyPro" ? "selectedPlanCard" : ""}`}
                onClick={() => setSelectedPlanID('yearlyPro')}
            >
                <img src="/images/icon-pro.svg" alt="pro icon" className="planIcon" />
                <div className="flex flex-col gap-1.5">
                    <h3 className="modeName text-[var(--purple-950)]">Pro</h3>
                    <p className="price text-[var(--grey-500)]">$150/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
        </section>
    )
}

export default YearlyPlanCardsSection
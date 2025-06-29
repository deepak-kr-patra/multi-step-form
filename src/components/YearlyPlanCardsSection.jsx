const YearlyPlanCardsSection = ({ selectPlan }) => {
    return (
        <section
            // id="planCardsSection"
            className="flex flex-col sm:flex-row justify-between gap-3 md:gap-4"
        >
            <div
                id="yearlyArcade"
                className="planCard"
                onClick={() => selectPlan('yearlyArcade')}
            >
                <div className="image-div arcade-image-div"></div>
                <div className="flex flex-col gap-2">
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Arcade</h3>
                    <p className="price text-[var(--grey-500)]">$90/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div
                id="yearlyAdvanced"
                className="planCard"
                onClick={() => selectPlan('yearlyAdvanced')}
            >
                <div className="image-div advanced-image-div"></div>
                <div className="flex flex-col gap-2">
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Advanced</h3>
                    <p className="price text-[var(--grey-500)]">$120/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div
                id="yearlyPro"
                className="planCard"
                onClick={() => selectPlan('yearlyPro')}
            >
                <div className="image-div pro-image-div"></div>
                <div className="flex flex-col gap-2">
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Pro</h3>
                    <p className="price text-[var(--grey-500)]">$150/yr</p>
                    <p className="freeMonths text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
        </section>
    )
}

export default YearlyPlanCardsSection
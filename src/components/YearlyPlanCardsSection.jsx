const YearlyPlanCardsSection = () => {
    return (
        <section
            // id="planCardsSection"
            className="flex flex-col sm:flex-row justify-between gap-4"
        >
            <div className="planCard">
                <div className="image-div arcade-image-div"></div>
                <div>
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Arcade</h3>
                    <p className="price text-sm sm:text-[16px] text-[var(--grey-500)]">$90/yr</p>
                    <p className="freeMonths text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div className="planCard">
                <div className="image-div advanced-image-div"></div>
                <div>
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Advanced</h3>
                    <p className="price text-sm sm:text-[16px] text-[var(--grey-500)]">$120/yr</p>
                    <p className="freeMonths text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
            <div className="planCard">
                <div className="image-div pro-image-div"></div>
                <div>
                    <h3 className="modeName font-bold text-[var(--purple-950)]">Pro</h3>
                    <p className="price text-sm sm:text-[16px] text-[var(--grey-500)]">$150/yr</p>
                    <p className="freeMonths text-xs sm:text-sm text-[var(--blue-950)]">2 months free</p>
                </div>
            </div>
        </section>
    )
}

export default YearlyPlanCardsSection
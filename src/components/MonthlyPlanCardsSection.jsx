const MonthlyPlanCardsSection = () => {
    return (
        <section
            // id="planCardsSection"
            className="flex flex-col sm:flex-row justify-between gap-4"
        >
            <div className="planCard">
                <div className="image-div arcade-image-div"></div>
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Arcade</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$9/mo</p>
                </div>
            </div>
            <div className="planCard">
                <div className="image-div advanced-image-div"></div>
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Advanced</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$12/mo</p>
                </div>
            </div>
            <div className="planCard">
                <div className="image-div pro-image-div"></div>
                <div>
                    <h3 className="font-bold text-[var(--purple-950)]">Pro</h3>
                    <p className="text-sm sm:text-[16px] text-[var(--grey-500)]">$15/mo</p>
                </div>
            </div>
        </section>
    )
}

export default MonthlyPlanCardsSection
import { getAddOnDetails, getPlanDetails, getTotalCost } from "../utils/getPlanAndAddOnDetails";
import useAccountSetupState from "../zustand/useAccountSetupState";


const SelectedPlansAndAddOns = () => {

    const { setStepNumber, subscriptionMode, selectedPlanID, selectedAddOns } = useAccountSetupState();

    const selectedPlan = getPlanDetails(selectedPlanID);
    const totalCost = getTotalCost(selectedPlanID, subscriptionMode, selectedAddOns);

    return (
        <section id="selectedPlansAndAddOnsSection">
            <section id="plansAndAddOns" className="w-full">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="planName">{selectedPlan.plan}</p>
                        <button className="changePlan" onClick={() => setStepNumber(2)}>Change</button>
                    </div>
                    <span className="planCost">{selectedPlan.cost}</span>
                </div>

                {selectedAddOns.length > 0 && <div className="divider"></div>}

                <div className="flex flex-col gap-4 sm:gap-5">
                    {selectedAddOns.map((selectedAddOn, idx) => {
                        let addOnDetails = getAddOnDetails(selectedAddOn, subscriptionMode);
                        return <div className="flex justify-between items-center" key={idx}>
                            <p className="addOnName">{addOnDetails.addOnName}</p>
                            <span className="addOnCost">{addOnDetails.addOnCost}</span>
                        </div>
                    })}
                </div>
            </section>

            <div className="flex p-5 justify-between items-center">
                <p className="totalText">Total {subscriptionMode === "monthly" ? "(per month)" : "(per year)"}</p>
                <span className="totalCost">
                    {subscriptionMode === "monthly" ? "+" : ""}${totalCost}/{subscriptionMode === "monthly" ? "mo" : "yr"}
                </span>
            </div>
        </section>
    )
}

export default SelectedPlansAndAddOns
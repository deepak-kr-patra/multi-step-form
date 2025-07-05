import { useEffect } from "react";
import useAccountSetupState from "../zustand/useAccountSetupState"


const AddOnsCardsSection = () => {

    const { subscriptionMode, selectedAddOns, setSelectedAddOns } = useAccountSetupState();

    const toggleAddOn = (id) => {
        setSelectedAddOns(
            selectedAddOns.includes(id)
                ? selectedAddOns.filter((item) => item !== id)
                : [...selectedAddOns, id]
        );
    }

    useEffect(() => {
        console.log(selectedAddOns);
    }, [selectedAddOns]);

    return (
        <section className="flex flex-col justify-start items-center gap-4">
            <label
                id="onlineService"
                className={`addOnCard ${selectedAddOns.includes('onlineService') ? 'selectedAddOnCard' : ''}`}
                onClick={() => toggleAddOn('onlineService')}
            >
                <div className="addOnCheckBox" />
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="addOnCardText text-[var(--blue-950)] font-bold">Online service</h3>
                        <p className="addOnCardText text-[var(--grey-500)] font-medium">Access to multiplayer games</p>
                    </div>
                    <div>
                        <span className="addOnCardText text-[var(--purple-600)] font-medium">
                            {subscriptionMode === "monthly" ? "+$1/mo" : "+$10/yr"}
                        </span>
                    </div>
                </div>
            </label>
            <label
                id="largerStorage"
                className={`addOnCard ${selectedAddOns.includes('largerStorage') ? 'selectedAddOnCard' : ''}`}
                onClick={() => toggleAddOn('largerStorage')}
            >
                <div className="addOnCheckBox" />
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="addOnCardText text-[var(--blue-950)] font-bold">Larger storage</h3>
                        <p className="addOnCardText text-[var(--grey-500)] font-medium">Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <span className="addOnCardText text-[var(--purple-600)] font-medium">
                            {subscriptionMode === "monthly" ? "+$2/mo" : "+$20/yr"}
                        </span>
                    </div>
                </div>
            </label>
            <label
                id="customizableProfile"
                className={`addOnCard ${selectedAddOns.includes('customizableProfile') ? 'selectedAddOnCard' : ''}`}
                onClick={() => toggleAddOn('customizableProfile')}
            >
                <div className="addOnCheckBox" />
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="addOnCardText text-[var(--blue-950)] font-bold">Customizable profile</h3>
                        <p className="addOnCardText text-[var(--grey-500)] font-medium">Custom theme on your profile</p>
                    </div>
                    <div>
                        <span className="addOnCardText text-[var(--purple-600)] font-medium">
                            {subscriptionMode === "monthly" ? "+$2/mo" : "+$20/yr"}
                        </span>
                    </div>
                </div>
            </label>
        </section>
    )
}

export default AddOnsCardsSection
import { useEffect } from "react";
import useAccountSetupState from "../zustand/useAccountSetupState"


const AddOnsCardsSection = () => {

    const { selectedAddOns, setSelectedAddOns } = useAccountSetupState();

    const selectAddOn = (id) => {
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
                // onClick={() => selectAddOn('onlineService')}
            >
                <input
                    type="checkbox"
                    className="addOnCheckBox"
                    checked={selectedAddOns.includes('onlineService')}
                    onChange={() => selectAddOn('onlineService')}
                />
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3 className="text-xs sm:text-[16px] text-[var(--blue-950)] font-bold">Online service</h3>
                        <p className="text-xs sm:text-[16px] text-[var(--grey-500)]">Access to multiplayer games</p>
                    </div>
                    <div>
                        <span className="text-xs sm:text-[16px] text-[var(--purple-600)]">+$1/mo</span>
                    </div>
                </div>
            </label>
            <label
                id="largerStorage"
                className={`addOnCard ${selectedAddOns.includes('largerStorage') ? 'selectedAddOnCard' : ''}`}
                // onClick={() => selectAddOn('largerStorage')}
            >
                <input
                    type="checkbox"
                    className="addOnCheckBox"
                    checked={selectedAddOns.includes('largerStorage')}
                    onChange={() => selectAddOn('largerStorage')}
                />
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3 className="text-xs sm:text-[16px] text-[var(--blue-950)] font-bold">Larger storage</h3>
                        <p className="text-xs sm:text-[16px] text-[var(--grey-500)]">Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <span className="text-xs sm:text-[16px] text-[var(--purple-600)]">+$2/mo</span>
                    </div>
                </div>
            </label>
            <label
                id="customizableProfile"
                className={`addOnCard ${selectedAddOns.includes('customizableProfile') ? 'selectedAddOnCard' : ''}`}
                // onClick={() => selectAddOn('customizableProfile')}
            >
                <input
                    type="checkbox"
                    className="addOnCheckBox"
                    checked={selectedAddOns.includes('customizableProfile')}
                    onChange={() => selectAddOn('customizableProfile')}
                />
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3 className="text-xs sm:text-[16px] text-[var(--blue-950)] font-bold">Customizable profile</h3>
                        <p className="text-xs sm:text-[16px] text-[var(--grey-500)]">Custom theme on your profile</p>
                    </div>
                    <div>
                        <span className="text-xs sm:text-[16px] text-[var(--purple-600)]">+$2/mo</span>
                    </div>
                </div>
            </label>
        </section>
    )
}

export default AddOnsCardsSection
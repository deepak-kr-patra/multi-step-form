import { create } from 'zustand'

const useAccountSetupState = create((set) => ({
    stepNumber: 3,
    setStepNumber: (stepNumber) => set({ stepNumber }),
    subscriptionMode: "monthly",
    setSubscriptionMode: (subscriptionMode) => set({ subscriptionMode }),
    selectedPlanID: null,
    setSelectedPlanID: (selectedPlanID) => set({ selectedPlanID }),
    selectedAddOns: [],
    setSelectedAddOns: (selectedAddOns) => set({ selectedAddOns })
}));

export default useAccountSetupState;
import { create } from 'zustand'

const useAccountSetupState = create((set) => ({
    stepNumber: 1,
    setStepNumber: (stepNumber) => set({ stepNumber }),
    userDetails: {
        name: "",
        email: "",
        mobileNumber: ""
    },
    setUserDetails: (userDetails) => set({ userDetails }),
    subscriptionMode: "monthly",
    setSubscriptionMode: (subscriptionMode) => set({ subscriptionMode }),
    selectedPlanID: null,
    setSelectedPlanID: (selectedPlanID) => set({ selectedPlanID }),
    selectedAddOns: [],
    setSelectedAddOns: (selectedAddOns) => set({ selectedAddOns })
}));

export default useAccountSetupState;
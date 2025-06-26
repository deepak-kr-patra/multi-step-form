import { create } from 'zustand'

const useAccountSetupState = create((set) => ({
    stepNumber: 1,
    setStepNumber: (stepNumber) => set({ stepNumber }),
    subscriptionMode: "monthly",
    setSubscriptionMode: (subscriptionMode) => set({ subscriptionMode })
}));

export default useAccountSetupState;
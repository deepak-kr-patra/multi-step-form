import useAccountSetupState from "../../zustand/useAccountSetupState"

const BackBtn = () => {

    const { stepNumber, setStepNumber } = useAccountSetupState();

    return (
        <button
            className="min-h-10 h-max text-[var(--grey-500)] hover:text-[var(--purple-600)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
            onClick={() => setStepNumber(stepNumber - 1)}
        >
            Go Back
        </button>
    )
}

export default BackBtn
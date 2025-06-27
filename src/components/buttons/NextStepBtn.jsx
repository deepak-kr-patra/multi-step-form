const NextStepBtn = ({ handleNext }) => {
    return (
        <button
            className="min-h-10 h-max bg-[var(--blue-950)] hover:bg-[var(--purple-600)] text-[var(--blue-200)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
            onClick={() => handleNext()}
        >
            Next Step
        </button>
    )
}

export default NextStepBtn
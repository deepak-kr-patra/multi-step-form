import useAccountSetupState from "../zustand/useAccountSetupState";


const StepsBarMobile = () => {

  const { stepNumber } = useAccountSetupState();

  return (
    <section id="stepsSectionMobile" className="flex justify-center items-start p-6 gap-4">
      <div className={`stepNumber ${stepNumber === 1 ? "activeCircle" : ""}`}>1</div>
      <div className={`stepNumber ${stepNumber === 2 ? "activeCircle" : ""}`}>2</div>
      <div className={`stepNumber ${stepNumber === 3 ? "activeCircle" : ""}`}>3</div>
      <div className={`stepNumber ${stepNumber === 4 || stepNumber === 5 ? "activeCircle" : ""}`}>4</div>
    </section>
  )
}

export default StepsBarMobile
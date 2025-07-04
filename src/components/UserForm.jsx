import useAccountSetupState from "../zustand/useAccountSetupState";


const UserForm = () => {

    const { setStepNumber, userDetails, setUserDetails } = useAccountSetupState();

    const displayWarning = (inputId, labelId) => {
        let input = document.getElementById(inputId);
        let label = document.getElementById(labelId);

        input.classList.add("showRedBorder");
        label.classList.add("showWarning");
    }

    const handleNext = () => {
        document.getElementById("name").classList.remove("showRedBorder");
        document.getElementById("warningName").classList.remove("showWarning");
        document.getElementById("email").classList.remove("showRedBorder");
        document.getElementById("warningEmail").classList.remove("showWarning");
        document.getElementById("mobileNumber").classList.remove("showRedBorder");
        document.getElementById("warningMobileNum").classList.remove("showWarning");

        if (userDetails.name === "") {
            displayWarning("name", "warningName");
            return;
        }
        if (userDetails.email === "") {
            displayWarning("email", "warningEmail");
            return;
        }
        if (userDetails.mobileNumber === "") {
            displayWarning("mobileNumber", "warningMobileNum");
            return;
        }
        setStepNumber(2);
    }

    return (
        <form
            action={() => handleNext()}
            className="relative w-full h-full flex flex-col justify-between sm:px-3 lg:px-16"
        >
            <section className="liftedElement gap-4 sm:gap-6 px-6 py-8 sm:p-0 bg-white">
                <div className="stepHeadingDiv sm:mb-2">
                    <h1 className="text-2xl sm:text-4xl stepHeading">Personal info</h1>
                    <p className="stepText">Please provide your name, email address, and phone number.</p>
                </div>

                <div className="flex flex-col sm:gap-1">
                    <div className="flex justify-between">
                        <label htmlFor="name">Name</label>
                        <label id="warningName" className="warning">This field is required</label>
                    </div>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                        className="personalInfoInput p-2 md:px-4 md:py-3 text-sm md:text-md lg:text-lg"
                        value={userDetails.name}
                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col sm:gap-1">
                    <div className="flex justify-between">
                        <label htmlFor="email">Email Address</label>
                        <label id="warningEmail" className="warning">This field is required</label>
                    </div>
                    <input
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        className="personalInfoInput p-2 md:px-4 md:py-3 text-sm md:text-md lg:text-lg"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                    />
                </div>

                <div className="flex flex-col sm:gap-1">
                    <div className="flex justify-between">
                        <label htmlFor="mobileNumber">Phone Number</label>
                        <label id="warningMobileNum" className="warning">This field is required</label>
                    </div>
                    <input
                        type="tel"
                        id="mobileNumber"
                        placeholder="e.g. +1 234 567 890"
                        className="personalInfoInput p-2 md:px-4 md:py-3 text-sm md:text-md lg:text-lg"
                        value={userDetails.mobileNumber}
                        onChange={(e) => setUserDetails({ ...userDetails, mobileNumber: e.target.value })}
                    />
                </div>
            </section>

            <div className="buttonsDiv justify-end bg-white py-4 sm:p-0">
                <input
                    type="submit"
                    className="min-h-10 h-max bg-[var(--blue-950)] hover:bg-[var(--blue-950-h)] text-[var(--blue-200)] font-medium px-4 sm:py-3 sm:px-6 rounded-md cursor-pointer"
                    value={"Next Step"}
                />
            </div>
        </form>
    )
}

export default UserForm
const AddOnsCardsSection = () => {
    return (
        <section className="flex flex-col justify-start items-center gap-3">
            <div className="addOnCard flex">
                <div className="checkBoxDiv">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3>Online service</h3>
                        <p>Access to multiplayer games</p>
                    </div>
                    <div>
                        <span>+$1/mo</span>
                    </div>
                </div>
            </div>
            <div className="addOnCard flex">
                <div className="checkBoxDiv">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3>Larger storage</h3>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <span>+$2/mo</span>
                    </div>
                </div>
            </div>
            <div className="addOnCard flex">
                <div className="checkBoxDiv">
                    <input type="checkbox" name="" id="" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <div>
                        <h3>Customizable Profile</h3>
                        <p>Custom theme on your profile</p>
                    </div>
                    <div>
                        <span>+$2/mo</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddOnsCardsSection
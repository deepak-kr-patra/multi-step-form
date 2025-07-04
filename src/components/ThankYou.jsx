const ThankYou = () => {
    return (
        <section className="relative w-full h-full flex justify-center items-center sm:px-3 md:px-6 lg:px-16">
            <section className="liftedElement thankYouBox justify-center items-center gap-2 md:gap-3 p-5 md:p-12 bg-white">
                <img src="/images/icon-thank-you.svg" alt="thankyou icon" className="thankYouImg" />
                <h1 className="text-2xl text-center sm:text-4xl stepHeading">Thank you!</h1>
                <p className="stepText text-center">
                    Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.
                </p>
            </section>
        </section>
    )
}

export default ThankYou
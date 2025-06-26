import { useEffect } from 'react';
import './App.css';
import StepsBar from './components/StepsBar';
import StepsBarMobile from './components/StepsBarMobile';
import UserForm from './components/UserForm';
import SelectPlan from './components/SelectPlan';
import useAccountSetupState from './zustand/useAccountSetupState';
// import useScreenWidth from './zustand/useScreenWidth';


function App() {

  const { stepNumber } = useAccountSetupState();
  // const { screenWidth, setScreenWidth } = useScreenWidth();

  // window.onresize = function () {
  //   setScreenWidth(window.innerWidth);
  // };

  useEffect(() => {
    let step1Circles = document.querySelectorAll('.stepNumber1');
    let step2Circles = document.querySelectorAll('.stepNumber2');
    let step3Circles = document.querySelectorAll('.stepNumber3');
    let step4Circles = document.querySelectorAll('.stepNumber4');

    let stepCircles = document.querySelectorAll('.stepNumber');
    stepCircles.forEach(stepCircle => stepCircle.classList.remove('activeCircle'));

    if (stepNumber === 1) {
      step1Circles.forEach(step1Circle => step1Circle.classList.add('activeCircle'))
    } else if (stepNumber === 2) {
      step2Circles.forEach(step2Circle => step2Circle.classList.add('activeCircle'))
    } else if (stepNumber === 3) {
      step3Circles.forEach(step3Circle => step3Circle.classList.add('activeCircle'))
    } else if (stepNumber === 4) {
      step4Circles.forEach(step4Circle => step4Circle.classList.add('activeCircle'))
    }
  }, [stepNumber]);

  return (
    <>
      <main id='container' className='flex flex-col justify-start items-center sm:flex-row p-0 sm:p-4 sm:pr-0 sm:bg-white'>
        <StepsBar />        {/* visible when screen width >= 640px */}
        <StepsBarMobile />  {/* visible when screen width < 640px */}
        <section id='setupSection' className='flex justify-center items-center p-0 pb-0 lg:px-12 sm:py-2 md:py-6'>
          {stepNumber === 5 && <UserForm />}
          {stepNumber === 1 && <SelectPlan />}
        </section>
      </main>

      {/* <!-- Step 2 start --> */}

      {/* Select your plan
      You have the option of monthly or yearly billing.

      Arcade
      $9/mo

      Advanced
      $12/mo

      Pro
      $15/mo

      Monthly
      Yearly

      Go Back
      Next Step */}

      {/* <!-- Step 2 end --> */}

      {/* <!-- Step 3 start --> */}

      {/* Pick add-ons
      Add-ons help enhance your gaming experience.

      Online service
      Access to multiplayer games
      +$1/mo

      Larger storage
      Extra 1TB of cloud save
      +$2/mo

      Customizable Profile
      Custom theme on your profile
      +$2/mo

      Go Back
      Next Step */}

      {/* <!-- Step 3 end --> */}

      {/* <!-- Step 4 start --> */}

      {/* Finishing up
      Double-check everything looks OK before confirming.

      <!-- Dynamically add subscription and add-on selections here -->

      Total (per month/year)

      Go Back
      Confirm */}

      {/* <!-- Step 4 end --> */}

      {/* <!-- Step 5 start --> */}

      {/* Thank you!

      Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free
      to email us at support@loremgaming.com. */}

      {/* <!-- Step 5 end --> */}

      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </>
  );
}

export default App;

import './App.css';
import useAccountSetupState from './zustand/useAccountSetupState';

import StepsBar from './components/StepsBar';
import StepsBarMobile from './components/StepsBarMobile';
import UserForm from './components/UserForm';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import FinishingUp from './components/FinishingUp';
import useScreenWidth from './zustand/useScreenWidth';


function App() {

  const { stepNumber } = useAccountSetupState();
  const { screenWidth, setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      <main id='container' className='flex flex-col justify-start items-center sm:flex-row p-0 sm:p-4 sm:pr-0 sm:bg-white'>
        {screenWidth < 640 && <StepsBarMobile/>}
        {screenWidth >= 640 && <StepsBar/>}
        {/* <StepsBar />
        <StepsBarMobile /> */}
        <section id='setupSection' className='flex justify-center items-center p-0 pb-0 lg:px-12 sm:py-2 md:py-6'>
          {stepNumber === 1 && <UserForm />}
          {stepNumber === 2 && <SelectPlan />}
          {stepNumber === 3 && <AddOns />}
          {stepNumber === 4 && <FinishingUp />}
        </section>
      </main>

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

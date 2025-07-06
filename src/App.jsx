import './App.css';
import useAccountSetupState from './zustand/useAccountSetupState';
import useScreenWidth from './zustand/useScreenWidth';

import StepsBar from './components/StepsBar';
import StepsBarMobile from './components/StepsBarMobile';
import UserForm from './components/UserForm';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import FinishingUp from './components/FinishingUp';
import ThankYou from './components/ThankYou';
import { Toaster } from 'react-hot-toast';


function App() {

  const { stepNumber } = useAccountSetupState();
  const { screenWidth, setScreenWidth } = useScreenWidth();

  window.onresize = function () {
    setScreenWidth(window.innerWidth);
  };

  return (
    <>
      <main id='container' className='flex flex-col justify-start items-center sm:flex-row p-0 sm:p-4 sm:pr-0 sm:bg-white'>
        {screenWidth < 640 && <StepsBarMobile />}
        {screenWidth >= 640 && <StepsBar />}
        <section id='setupSection' className='flex justify-center items-center p-0 pb-0 lg:px-12 sm:py-2 md:py-6'>
          {stepNumber === 1 && <UserForm />}
          {stepNumber === 2 && <SelectPlan />}
          {stepNumber === 3 && <AddOns />}
          {stepNumber === 4 && <FinishingUp />}
          {stepNumber === 5 && <ThankYou />}
        </section>
        <Toaster toastOptions={{ duration: 2500 }} />
      </main>

      {/* <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Deepak Kumar Patra</a>.
      </div> */}
    </>
  );
}

export default App;

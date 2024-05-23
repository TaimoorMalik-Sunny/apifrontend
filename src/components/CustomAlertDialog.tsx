import React, { useState } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const CustomAlertDialog = () => {
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleNextScreen = () => {
    setCurrentScreen(currentScreen + 1);
  };

  const handlePreviousScreen = () => {
    setCurrentScreen(currentScreen - 1);
  };

  return (
    <div className="custom-alert-dialog">
      {currentScreen === 1 && <Screen1 onNext={handleNextScreen} />}
      {currentScreen === 2 && <Screen2 onPrevious={handlePreviousScreen} />}
    </div>
  );
};

export default CustomAlertDialog;

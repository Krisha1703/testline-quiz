import PowerButtonsEnabled from "./power-buttons-enabled"

const DisplayPowerButtons = ({handle50_50, handleSkip, handleHint, handleFreezeTimer, powerUps}) => {
  return (
    <div className="flex justify-center items-center w-full mb-8 space-x-10">
        {powerUps['50/50'] > 0 && (
            <PowerButtonsEnabled onClick={handle50_50} text={" - 50/50"} children={powerUps['50/50']}/>
        )}

        {powerUps['Skip'] > 0 && (
            <PowerButtonsEnabled onClick={handleSkip} text={" - Skip "} children={powerUps['Skip']}/>
        )}

        {powerUps['Hint'] > 0 && (
            <PowerButtonsEnabled onClick={handleHint} text={" - Hint "} children={powerUps['Hint']}/>
        )}

        {powerUps['Freeze Timer'] > 0 && (
            <PowerButtonsEnabled onClick={handleFreezeTimer} text={" - Freeze 30s "} children={powerUps['Freeze Timer']}/>
        )}
    </div>
  )
}

export default DisplayPowerButtons
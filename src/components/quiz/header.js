import MainButton from "./main-button";
import PowerUpModal from "../powerups/powerup-modal";

const Header = ({toggleModal, coins, setCoins, setPowerUps, handleRestart, shuffleQuestions, points, isModalOpen}) => {
  return (
    <>
        {/* Main Buttons */}
        <div className="flex md:flex-row flex-col justify-center items-center w-full mb-8 md:space-x-10">
            <MainButton text={"Restart"} onClick={handleRestart}/>
            <MainButton text={"Shuffle"} onClick={shuffleQuestions}/>
            <MainButton text={`Score: ${points}`} />
            <MainButton text={`Coins: ${coins}`} src={"/coin.png"}/>
            <MainButton text={" Quiz Shop"} onClick={toggleModal}/>

            {/* Modal for Power-ups */}
            {isModalOpen && (
                <PowerUpModal toggleModal={toggleModal} coins={coins} setCoins={setCoins} setPowerUps={setPowerUps}/>
            )}   
        </div>
    </>
  )
}

export default Header
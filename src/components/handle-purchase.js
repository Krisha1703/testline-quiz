const handlePurchase = (powerUp, cost, coins) => {
    // Check if the user has enough coins
    if (coins >= cost) {
      // Deduct coins for the purchase
      setCoins(coins - cost);
      
      // Set the power-up as purchased (visible on main page)
      setPowerUps(prev => ({
        ...prev,
        [powerUp]: prev[powerUp] + 1,
      }));
      
      alert(`${powerUp} power-up purchased!`);
    } else {
      alert('Insufficient coins!');
    }
  };
export default handlePurchase;
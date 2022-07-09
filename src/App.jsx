import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {
  //use the hooks thirdweb give us
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  //this is the case where the use hacn;t connected their wallet
  //to your web app. Let them call connectWallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to InvestmentDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          Connect yout wallet
        </button>
      </div>
    );
  }

  //this is the case where we have the user's address
  //which means they've connected their wallet to our site
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  )
};

export default App;

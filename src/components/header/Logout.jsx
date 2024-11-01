import { useActiveWallet } from "thirdweb/react";
import { FaSignOutAlt } from "react-icons/fa";

export const LogoutButton = () => {
  const wallet = useActiveWallet();

  const handleDisconnect = async () => {
    try {
      if (wallet) {
        await wallet.disconnect();
        console.log("Successfully disconnected");
      }
    } catch (error) {
      console.error("Error disconnecting:", error);
    }
  };

  return (
    <button
      onClick={handleDisconnect}
      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 ease-in-out">
      <FaSignOutAlt size={20} />
    </button>
  );
};

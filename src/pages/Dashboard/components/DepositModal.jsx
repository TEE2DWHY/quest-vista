import React, { useEffect, useState } from "react";
import { useSendTransaction, useBalance, useAccount } from "wagmi";
import { formatEther, parseEther } from "viem";
import { message } from "antd";
import "../../../assets/styles/dashboard.css";
import { LiaEthereum } from "react-icons/lia";

const recipient = import.meta.env.RECIPIENT_ADDRESS;

const DepositModal = ({ isVisible, onClose, onDeposit }) => {
  const [amount, setAmount] = useState("");
  const { sendTransaction, isSuccess: txSuccessful } = useSendTransaction();
  const { address } = useAccount();
  const result = useBalance({
    address: address,
  });

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirm = async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      return message.error(
        <div className="message">Please enter a valid amount</div>
      );
    }
    if (formatEther(result?.data?.value) < 0.12) {
      return message.error(
        <div className="message">You don't have enought eth.</div>
      );
    }
    if (amount < 0.12) {
      return message.error(
        <div className="message">Minimum Deposit is 0.12 ETH</div>
      );
    }
    try {
      sendTransaction({
        to: recipient,
        value: parseEther(amount),
      });
      onClose();
    } catch (error) {
      console.error(error);
      message.error("Transaction failed");
    }
  };

  useEffect(() => {
    if (txSuccessful) {
      message.success(<div className="message">Deposit is Successful.</div>);
    }
  }, [txSuccessful]);

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <LiaEthereum color="#1d4ed8" size={40} />
        <h2 className="deposit-eth">Deposit ETH</h2>
        <input
          type="number"
          placeholder="Enter amount in ETH"
          value={amount}
          onChange={handleAmountChange}
        />
        <button onClick={handleConfirm}>Confirm Deposit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default DepositModal;

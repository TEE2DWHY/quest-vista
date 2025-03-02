import { http, createConfig } from "wagmi";
import { base, mainnet, optimism, sonic } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = import.meta.env.VITE_PROJECT_ID;

export const config = createConfig({
  chains: [sonic],
  connectors: [walletConnect({ projectId })],
  transports: {
    [sonic.id]: http(),
  },
});

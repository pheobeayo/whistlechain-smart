import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

export const SUPPORTED_CHAIN = 99876;

export const isSupportedChain = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;

const EMC = {
  chainId: SUPPORTED_CHAIN,
  name: "emc",
  currency: "EMC",
  explorerUrl: "https://testnet.emcscan.com",
  rpcUrl: import.meta.env.VITE_INFURA_RPC,
};


const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://localhost:5173',
  icons: ['https://localhost:5173']
}

export const configWeb3Modal = () => createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [EMC],
  projectId: import.meta.env.VITE_PROJECTID,
  enableAnalytics: false,
  themeVariables: {
    '--w3m-accent': '#3F9AAE',
    '--w3m-border-radius-master': '10'
  }
})
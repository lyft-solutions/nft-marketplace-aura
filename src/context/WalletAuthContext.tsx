'use client';

import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useIsLoggedIn, getNetwork, useDynamicContext, getAuthToken } from '@dynamic-labs/sdk-react-core';

interface WalletAuthContextProps {
    isLoggedIn: boolean;
    address: string | null;
    balance: string;
    currentNetwork: any;
    enabledNetworks: any[] | undefined;
    switchChain: (network: number) => Promise<void>;
    logoutWallet: () => Promise<void>;
    loginWallet: () => Promise<void>;
}

const WalletAuthContext = createContext<WalletAuthContextProps | undefined>(
    undefined
);

export const WalletAuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {

    const isLoggedIn = useIsLoggedIn();
    const { primaryWallet, handleLogOut, setShowAuthFlow } = useDynamicContext();
    const [enabledNetworks, setEnabledNetworks] = useState<any[]>([]);
    const [currentNetwork, setCurrentNetwork] = useState<any>(undefined);
    const [balance, setBalance] = useState<any>('0');
    const [address, setAddress] = useState<string | null>(null);
    
    const switchChain = useCallback(async (network: number) => {
        if (!primaryWallet?.connector || !primaryWallet.connector.supportsNetworkSwitching()) {
            return;
        }
        await primaryWallet?.connector.switchNetwork({ networkChainId: network });
        fetchBalance();
        setCurrentNetwork(enabledNetworks.find((n: any) => n.chainId === network));
    }, [primaryWallet?.connector]);


    const fetchBalance = useCallback(async () => {
        if (primaryWallet) {
            const balance = await primaryWallet.getBalance();
            setBalance(balance);
            return balance;
        }
    }, [primaryWallet?.connector]);

    const logoutWallet = useCallback(async () => {
        await handleLogOut();
    }, [handleLogOut]);

    const loginWallet = useCallback(async () => {
        setShowAuthFlow(true)
    }, []);

    useEffect(() => {
        if (primaryWallet?.address) {
            fetchBalance();
            setAddress(primaryWallet.address);
            const enabledNetworks = primaryWallet?.connector.getEnabledNetworks();
            setEnabledNetworks(enabledNetworks)
            getNetwork(primaryWallet.connector).then((network) => {
                console.log('network', network);
                const activeNetwork = enabledNetworks.find((n: any) => n.chainId === network || n.cluster.includes(network));
                setCurrentNetwork(activeNetwork);
            });
        }
    }, [primaryWallet?.address])

    return (
        <WalletAuthContext.Provider
            value={{
                isLoggedIn,
                address,
                balance,
                currentNetwork,
                enabledNetworks,
                switchChain,
                logoutWallet,
                loginWallet
            }}
        >
            {children}
        </WalletAuthContext.Provider>
    );
};

export const useWalletAuth = () => {
    const context = useContext(WalletAuthContext);
    if (context === undefined) {
        throw new Error('useWalletAuth must be used within a WalletAuthProvider');
    }
    return context;
};
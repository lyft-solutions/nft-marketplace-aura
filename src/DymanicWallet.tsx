import React from "react";
import {
    DynamicContextProvider,
    DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";

const DymanicWallet = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <DynamicContextProvider
            settings={{
                environmentId: "b9c9bb06-904f-4876-b36a-c034fad7b220",
                walletConnectors: [SolanaWalletConnectors],
            }}
        >
            <>{children}</>
        </DynamicContextProvider>
    );
};

export default DymanicWallet;
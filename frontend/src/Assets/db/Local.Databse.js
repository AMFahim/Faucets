import AvalancheLogo from "./../image/Avalanche_Fuji.png";
import FantomLogo from './../image/Fantom.png';
import HarmoniLogo from './../image/Harmoni.jpg';
import PolygenLogo from './../image/polygen.png';
export const CompanyManuData = [
    {
        id: 1,
        name: "Arbitrum Rinkeby",
        img: "https://faucets1.netlify.app/static/media/logo.abae01ba680d97dacc23a0fb5caa4863.svg"
    },
    {
        name: "Avalanche Fuji",
        img: AvalancheLogo
    },
    {
        id: 2,
        name: "BNB Chain Testnet",
        img: "https://faucets1.netlify.app/static/media/BNB-Chain-Testnet.ddefc4ca2aabb89b7006.png"
    },
    {
        id: 3,
        name: "Ethereum Rinkeby",
        img: "https://faucets1.netlify.app/static/media/logo.abae01ba680d97dacc23a0fb5caa4863.svg"
    },
    {
        id: 4,
        name: "Fantom Testnet",
        img: FantomLogo
    },
    {
        id: 5,
        name: "Harmony Testnet",
        img: HarmoniLogo
    },
    {
        id: 6,
        name: "POA Network Sokol",
        img: "https://faucets1.netlify.app/static/media/POANetworkSokol.c68c7ae45a1e51482db2.png"
    },
    {
        id: 7,
        name: "Polygon Mumbai",
        img: PolygenLogo
    }
]



export const FaqData = [
    {
        id: "1",
        ques: "What is a blockchain oracle?",
        ans: "A blockchain oracle is any system that services a smart contract by providing it with data from an off-chain source or connecting it with an off-chain system. Oracles enable connectivity between blockchains and real-world data by interfacing with external APIs and data feeds, allowing them to pull data for or push data from a smart contract."
    },
    {
        id: "2",
        ques: "Why do blockchains need oracles?",
        ans: "Oracles enable smart contracts to interact with off-chain resources. Without oracles, smart contracts can only access data within a blockchain, severely limiting their potential applications. The majority of industry-changing real-world use cases for smart contracts require off-chain data and computation for proper execution and often an integration with existing payment rails to settle a contract. For example, a smart contract may require high-quality weather data from a reputable source like AccuWeather to trigger a transaction. It may also require the ability to pay out escrowed fiat currency through existing financial infrastructure, such as a bank checking account."
    },
    {
        id: "3",
        ques: "What is the Chainlink Network?",
        ans: "The Chainlink Network refers to all of the decentralized oracle networks actively operating using the Chainlink protocol, including individual oracles, data providers running their own node, and node operators. By enabling smart contracts to quickly and securely connect to off-chain data sources using decentralized oracle networks, the Chainlink Network helps developers build more robust and diverse blockchain applications using real-world inputs and outputs. Additionally, as middleware between low-level blockchain protocols and external, off-chain data sources, the Chainlink Network serves as an abstraction layer for data providers to easily sell their existing APIs to any blockchain network."
    },
    {
        id: "4",
        ques: "How do I keep up with current protocol development?",
        ans: "The Chainlink development team is continuously building the network and protocol. To keep up to date with current progress you can follow the Chainlink Github. You can find a full list of open roles on the Chainlink Labs careers page."
    },
    {
        id: "5",
        ques: "What is Chainlink Verifiable Random Function (VRF)?",
        ans: "Chainlink VRF brings secure random number generation to the blockchain. Chainlink VRF solves the difficult problem of providing an on-chain source of randomness that is publicly verifiable to be authentic and tamper-proof. Many smart contracts are augmenting the value they can create by utilizing Chainlink VRF, specifically applications such as gaming dApps that must prove to their users that their source of randomness is provably fair and resistant to manipulation from any external entity. Chainlink VRF enables and accelerates the development of smart contracts focused on blockchain gaming, security, layer-two protocols, and various other use cases."
    },
    {
        id: "6",
        ques: "What is Chainlink Proof of Reserve?",
        ans: "Chainlink Proof of Reserve provides smart contracts with the data required to calculate the true collateralization of any on-chain asset backed by off-chain reserves such as stablecoins and cross-chain assets. Operated by a decentralized network of oracles, Chainlink Proof of Reserve enables the autonomous auditing of collateral used within DeFi in real-time, ensuring users’ funds are protected from unforeseen fractional reserve practices and other fraudulent activity from off-chain custodians. This provides both the growing DeFi ecosystem and the traditional financial system a way to increase the transparency of operations with definitive on-chain proof of any asset’s true collateralization."
    },
    {
        id: "7",
        ques: "Who can use Chainlink?",
        ans: "Any individual or group that needs real-world data to power and secure the execution of their smart contracts can benefit from Chainlink’s robust and customizable framework for creating decentralized oracle networks. Today, hundreds of teams working on dApps, blockchains, industry consortiums, enterprise projects, and more rely on Chainlink to provide tamper-proof inputs and outputs for their smart contracts. Chainlink has become the de facto oracle solution for the DeFi space, supporting top projects like Aave, Synthetix, and Compound, and securing billions in value across the sector.If you’d like more information on how Chainlink could provide solutions for your project, join us in the Official Discord Channel and reach out through the integrations submission form."
    },
    {
        id: "8",
        ques: "How do I keep up with current protocol development?",
        ans: "The Chainlink development team is continuously building the network and protocol. To keep up to date with current progress you can follow the Chainlink Github. You can find a full list of open roles on the Chainlink Labs careers page."
    }
]
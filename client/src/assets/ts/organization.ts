import { EventProps, EventData } from "./event";

export interface OrganizationProps {
  id: number;
  org_name: string;
  image: string;
  description: string;
  events_organized: number;
  events: EventProps[];
}

export const OrganizationData: OrganizationProps[] = [
  {
    id: 1,
    org_name: "Blockchain Society",
    image: "https://firebasestorage.googleapis.com/v0/b/care-for-health-1858e.appspot.com/o/East-India%E2%80%99s%20(1).png?alt=media&token=8eb7bca1-efe2-4295-b168-119d6d16c709",
    description: "A community focused on fostering blockchain education and development through various events and workshops.",
    events_organized: 5,
    events: EventData.filter(event => event.org_name === "Blockchain Society"),
  },
  {
    id: 2,
    org_name: "ETH Global",
    image: "https://assets.devfolio.co/hackathons/97a12d19ff434e56abf9b7a33e631b02/assets/cover/25.png",
    description: "A leading organization that hosts Ethereum-focused hackathons and conferences worldwide.",
    events_organized: 8,
    events: EventData.filter(event => event.org_name === "ETH Global"),
  },
  {
    id: 3,
    org_name: "DeFi Alliance",
    image: "https://file.chainup.com/pub/2024-07-23/13e88637-37ba-4959-9a29-3ad1e7d0dc63.webp",
    description: "A network of DeFi enthusiasts and developers working to push decentralized finance innovation.",
    events_organized: 3,
    events: EventData.filter(event => event.org_name === "DeFi Alliance"),
  },
  {
    id: 4,
    org_name: "Blockchain Association",
    image: "https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2020/09/alphagamma-Blockchain-Expo-opportunites-1021x580.jpg",
    description: "A global association dedicated to promoting blockchain technology and its adoption.",
    events_organized: 7,
    events: EventData.filter(event => event.org_name === "Blockchain Association"),
  },
  {
    id: 5,
    org_name: "NFT Global",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaQWd1AHIhUAPUsES4UGyVhVzVKjZJQi_SA&s",
    description: "A platform focused on NFT innovation, networking, and education for digital artists and creators.",
    events_organized: 4,
    events: EventData.filter(event => event.org_name === "NFT Global"),
  },
  {
    id: 6,
    org_name: "Hackathon Central",
    image: "https://cse.noticebard.com/wp-content/uploads/sites/23/2023/04/Web3-Hackathon-2023-1024x535.jpg",
    description: "A hub for organizing top-tier hackathons that encourage developers to build cutting-edge web3 applications.",
    events_organized: 6,
    events: EventData.filter(event => event.org_name === "Hackathon Central"),
  },
  {
    id: 7,
    org_name: "CryptoCon Team",
    image: "https://res.cloudinary.com/eduardsi/image/upload/w_1000,c_fit,co_white,l_text:Lato_80_bold:Cryptocon%25202024,g_north_west,x_100,y_100/w_1000,c_fit,co_white,l_text:Lato_40:May%252010-11%25202024,g_north_west,x_100,y_360/w_1000,c_fit,co_white,l_text:Lato_40_bold:New%2520York%252C%2520United%2520States,g_north_west,x_100,y_430/devevents-og_o00xcs.png",
    description: "An event organizer dedicated to bringing the best minds in cryptocurrency together for discussions and networking.",
    events_organized: 9,
    events: EventData.filter(event => event.org_name === "CryptoCon Team"),
  },
  {
    id: 8,
    org_name: "Metaverse Alliance",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4Yp8BaBICC7TBdeSMgTkoBTnIO693Ieyzg&s",
    description: "A group focused on metaverse technology, virtual reality, and digital asset integration.",
    events_organized: 2,
    events: EventData.filter(event => event.org_name === "Metaverse Alliance"),
  },
];

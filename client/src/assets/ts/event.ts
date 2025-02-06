export interface EventProps {
  id: number;
  name: string;
  org_name: string;
  date: string;
  registration: string;
  registration_fee: number;
  image: string;
  registered: number;
  location: string;
  verified?: boolean;
}

export const EventData:EventProps[] = [
  {
    id: 1,
    name: "EIBS 2025",
    org_name: "Blockchain Society",
    date: "Jan 19, 2024",
    registration: "Open",
    registration_fee: 200,
    image:
      "https://firebasestorage.googleapis.com/v0/b/care-for-health-1858e.appspot.com/o/East-India%E2%80%99s%20(1).png?alt=media&token=8eb7bca1-efe2-4295-b168-119d6d16c709",
    registered: 300,
    location: "Bangalore",
    verified: true,
  },
  {
    id: 2,
    name: "ETH India 2025",
    org_name: "ETH Global",
    date: "Jul 2, 2024",
    registration: "Upcoming",
    registration_fee: 0,
    image:
      "https://assets.devfolio.co/hackathons/97a12d19ff434e56abf9b7a33e631b02/assets/cover/25.png",
    registered: 300,
    location: "Bangalore",
    verified: true,
  },
  {
    id: 3,
    name: "DeFi Summit 2024",
    org_name: "DeFi Alliance",
    date: "Aug 15, 2024",
    registration: "Open",
    registration_fee: 50,
    image:
      "https://file.chainup.com/pub/2024-07-23/13e88637-37ba-4959-9a29-3ad1e7d0dc63.webp",
    registered: 150,
    location: "San Francisco",
  },
  {
    id: 4,
    name: "Blockchain Expo",
    org_name: "Blockchain Association",
    date: "Sep 20, 2024",
    registration: "Open",
    registration_fee: 100,
    image:
      "https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2020/09/alphagamma-Blockchain-Expo-opportunites-1021x580.jpg",
    registered: 500,
    location: "New York",
  },
  {
    id: 5,
    name: "NFT Connect 2024",
    org_name: "NFT Global",
    date: "Oct 5, 2024",
    registration: "Open",
    registration_fee: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaQWd1AHIhUAPUsES4UGyVhVzVKjZJQi_SA&s",
    registered: 200,
    location: "Tokyo",
  },
  {
    id: 6,
    name: "Web3 Hackathon",
    org_name: "Hackathon Central",
    date: "Nov 12, 2024",
    registration: "Open",
    registration_fee: 0,
    image:
      "https://cse.noticebard.com/wp-content/uploads/sites/23/2023/04/Web3-Hackathon-2023-1024x535.jpg",
    registered: 350,
    location: "London",
  },
  {
    id: 7,
    name: "CryptoCon 2024",
    org_name: "CryptoCon Team",
    date: "Dec 1, 2024",
    registration: "Closed",
    registration_fee: 75,
    image:
      "https://res.cloudinary.com/eduardsi/image/upload/w_1000,c_fit,co_white,l_text:Lato_80_bold:Cryptocon%25202024,g_north_west,x_100,y_100/w_1000,c_fit,co_white,l_text:Lato_40:May%252010-11%25202024,g_north_west,x_100,y_360/w_1000,c_fit,co_white,l_text:Lato_40_bold:New%2520York%252C%2520United%2520States,g_north_west,x_100,y_430/devevents-og_o00xcs.png",
    registered: 400,
    location: "Singapore",
  },
  {
    id: 8,
    name: "Metaverse Summit",
    org_name: "Metaverse Alliance",
    date: "Jan 25, 2025",
    registration: "Upcoming",
    registration_fee: 30,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT4Yp8BaBICC7TBdeSMgTkoBTnIO693Ieyzg&s",
    registered: 220,
    location: "Dubai",
  },
];

import { atom } from "recoil";
import { EventData } from "@/assets/ts/event";
interface EventProps {
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

export const eventState = atom<EventProps[]>({
    key: "eventState",
    default: EventData,
})

export const inputState = atom<string>({
    key: "inputState",
    default: "",
})
export const searchTermState = atom<string>({
    key: "searchTermState",
    default: "",
})
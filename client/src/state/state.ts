import { atom } from "recoil";
import { EventData,EventProps } from "@/assets/ts/event";


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
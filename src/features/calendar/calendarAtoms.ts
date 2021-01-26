import { atom } from "jotai"

type Axis = { x: number; y: number }

export const calendarHoverAtom = atom<Axis | null>(null)

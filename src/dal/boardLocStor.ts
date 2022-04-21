import {BoardType} from "../bll/store";

export type BoardLocStorType = {
    setBoards: (boards: string, data: BoardType[]) => void
    getBoards: () => [] | BoardType[]
}

export const BoardLocStor: BoardLocStorType = {
    setBoards(boards: string, data: BoardType[]) {
        localStorage.setItem(boards, JSON.stringify(data));
    },
    getBoards() {
        const serializedState = localStorage.getItem('boards')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    }
}


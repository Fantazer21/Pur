export type BoardType = {
    boardId: 1 | 2 | 3 | 4
    boardName: string
    cards: Array<CardType> | null
}

export type CardType = {
    id: number,
    boardId: 1 | 2 | 3 | 4 ,
    nameCard: string,
    descriptionCard: string,
    commentCard: string,
}

export const cardsStore: CardType[] = [
    {
    id: 1,
    boardId: 2,
    nameCard: "Name Card",
    descriptionCard: "descriptionCard",
    commentCard: 'Comment card'
},
]


export const initialState: BoardType[] = [
    {
        boardId: 1,
        boardName: "TO DO",
        cards: []
    },
    {
        boardId: 2,
        boardName: "In Progress",
        cards: []
    },
    {
        boardId: 3,
        boardName: "Testing",
        cards: []
    },
    {
        boardId: 4,
        boardName: "Done",
        cards: []
    },
]
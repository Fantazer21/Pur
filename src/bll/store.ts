export type BoardType = {
    id: number
    boardName: string
    cards: Array<CardType> | []
}

export type CardType = {
    id: number,
    boardId: number,
    nameCard: string,
    descriptionCard: string,
    commentCard: string,
}


export const initialState: BoardType[] = [
    {
        id: 1,
        boardName: "TO DO",
        cards: []
    },
    {
        id: 2,
        boardName: "In Progress",
        cards: [{
            id: 1,
            boardId: 2,
            nameCard: "Name Card",
            descriptionCard: "descriptionCard",
            commentCard: 'Comment card'
        }]
    },
    {
        id: 3,
        boardName: "Testing",
        cards: []
    },
    {
        id: 4,
        boardName: "Done",
        cards: []
    },
]
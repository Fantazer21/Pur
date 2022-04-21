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
    commentCard: Array<string>,
}



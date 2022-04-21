import {CardType} from "../bll/store";

export type CardsLocStorType = {
    setCards: (cards: string, data: CardType[]) => void
    getCards: () => [] | CardType[]
}

export const CardsLocStor: CardsLocStorType = {
    setCards(cards: string, data: CardType[]) {
        localStorage.setItem(cards, JSON.stringify(data));
    },
    getCards() {
        const serializedState = localStorage.getItem('cards')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    }
}

export type UserLocStorType = {
    setUser: (key: string, user: string) => void,
     getUser: () => string | undefined
}

export const userLocStor: UserLocStorType = {
    setUser(key: string, user: string) {
        localStorage.setItem(key, JSON.stringify(user));
    },
     getUser() {
            const serializedState = localStorage.getItem('user')
            if (serializedState === null) {
                return undefined
            }
            return JSON.parse(serializedState)
    }
}

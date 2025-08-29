export type withId ={
    id: number | string | undefined
}

export const listService = {
    add: (t: withId, ts: withId[]) => {
        let ingredient2 = [...ts]
        ingredient2.push(t)
        return ingredient2
    },

    remove: (t: withId, ts: withId[]) => {
        let ingredient2 = [...ts]
        let index = ingredient2.indexOf(t)
        ingredient2.splice(index, 1)
        return ingredient2
    },

    edit: (t: withId, ts: withId[]) => {
        let ts_temp : withId[]= [...ts]
        let index : number = ts_temp.indexOf(ts_temp.find((it: withId) => it.id === t.id)!)
        ts_temp.splice(index, 1)
        ts_temp = [
            ...ts_temp.slice(0, index),
            t,
            ...ts_temp.slice(index)
        ]
        return ts_temp
    }
}

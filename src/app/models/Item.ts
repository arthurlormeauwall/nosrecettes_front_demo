export interface Item {
    id?: number,
    name: string,
    quantityType: ItemType,
    type: string
}

export type ItemType = 'GR' | 'AMOUNT' | 'ML'
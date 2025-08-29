import { createContext, useContext } from 'react';
import { Item } from '../../../models/Item';

interface ItemsContextProps {
    items: Item[];
}

export const ItemsContext = createContext<ItemsContextProps | undefined>(undefined);

export const useItems = () => {
    const context = useContext(ItemsContext);
    if (!context) {
        throw new Error('useItems must be used within a WithItemsProvider');
    }
    return context;
};
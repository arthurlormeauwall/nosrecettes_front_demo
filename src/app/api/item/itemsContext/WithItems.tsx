import { useEffect, useState } from "react";
import { ItemsContext } from "./ItemsContext";
import { ItemApiManager } from "../ItemApiManager";
import { ItemMapperService } from "../ItemMapper";
import { RestItem } from "../../model/RestItem";
import LoadingComponent from "../../loadingComponent";
import { Item } from "../../../models/Item";

interface WithItemsProps {
    children: React.ReactNode;
}

export const WithItems: React.FC<WithItemsProps> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);

    const apiManager = new ItemApiManager()
    const mapper =  new ItemMapperService()

    const fetchData = async () => {
        const itemsData = await apiManager.retrieveItems();
        setItems(itemsData.map((item: RestItem) => mapper.toItem(item)));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <ItemsContext.Provider value={{ items }}>
        <LoadingComponent dataReady={items.length === 0 || items!=undefined}>
            {children}
            </LoadingComponent>
    </ItemsContext.Provider>
};

export const withItems = (Component : any)=> {
    return <WithItems>
        <Component/>
    </WithItems>
}

export default WithItems

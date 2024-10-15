import AddNewItem from '../../Item/AddNewItem'
import SearchAndEditItem from '../../Item/SearchAndEditItem'

const addOrEditItemPages = (client) => {
    return [
        {
            name: "Create new item",
            component: AddNewItem,
            propsToPass: {
                client: client
            }
        }
        ,
        {
            name: "Edit existing item",
            component: SearchAndEditItem,
            propsToPass: {
                client: client
            }
        }
    ]
}

export default addOrEditItemPages
import { IngredientType } from "../../models/IngredientType"
import { IngredientInfo, NumberInput, SubmitButton, CancelButton } from "../UI_Kit";

type EditIngredientViewProps = {
    ingredient: IngredientType,
    setQuantity: (quantity: number) => void,
    submitQuantity : (quantity: number) => void,    
    quantity: number,
    cancel : ()=>void
}

const EditIngredientView = ({ingredient, submitQuantity, setQuantity, quantity, cancel} : EditIngredientViewProps) => {

    return (<>
        <IngredientInfo 
            name={ingredient.item.name} 
            quantityType={ingredient.item.quantityType}
        />
        <NumberInput 
            autoFocus 
            placeholder="1" 
            onChange={setQuantity}
            value={quantity}
        />
        <SubmitButton onClick={() => submitQuantity(quantity)}>submit</SubmitButton>
        <CancelButton onClick={cancel}>cancel</CancelButton>
    </>
    )
}

export default EditIngredientView
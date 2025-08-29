import { useState } from "react"
import { EditableComponentFactory, FormProps, ViewOrSearchAndEditComponent } from "./EditableComponent"
import InPlaceConditionalRenderer from "../InPlaceConditionalRenderer"

export type InPlaceToggleEditandViewComponentProps<T> = {
    factory: EditableComponentFactory<T>,
    formProps : FormProps< T>
}

export const InPlaceToggleEditandViewComponent = <T,>({ factory, formProps }: InPlaceToggleEditandViewComponentProps<T>) => {
    const editableComponentFactory = factory

    const [getEditing, setGetEditing] = useState(editableComponentFactory.editing)

    const toggle = () => {
        setGetEditing(!getEditing)
    }

    const handleEdit = (t: T) => {
        formProps.onSubmit(t)
        toggle();
    }

    const trigger = () => {
        toggle();
    }

    const cancel = () => {
        setGetEditing(false)
    }

    const editableComponentForRender: ViewOrSearchAndEditComponent = {
        condition: getEditing,
        ComponentV: editableComponentFactory.viewComponent({trigger}),
        ComponentE: editableComponentFactory.editComponent({onSubmit: handleEdit, cancel, data: formProps.data})
    }

    return <InPlaceConditionalRenderer
        condition={editableComponentForRender.condition}
        ComponentA={editableComponentForRender.ComponentE}
        ComponentB={editableComponentForRender.ComponentV} />
}




export type FormProps<T> = {
    data?: T, 
    onChange?: (value: T) => void, 
    onSubmit: (value: T) => void, 
    cancel?: () => void}

export type TriggerProps = {trigger:() => void }


export type TogglableComponent<T, U> = {
    condition: boolean;
    ComponentV: U;
    ComponentE: T;
}

export type ViewOrSearchAndEditComponent = TogglableComponent<React.ReactElement,React.ReactElement>;

export type EditableComponentFactory<T>= {
    editing: boolean;
    viewComponent: (props: TriggerProps) => any;
    editComponent: (props: FormProps<T>) => any;
}


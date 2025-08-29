type InPlaceConditionalRendererProps ={
    condition: boolean;
    ComponentA: any;
    ComponentB: any;
}

const InPlaceConditionalRenderer = ({ condition, ComponentA, ComponentB }: InPlaceConditionalRendererProps) => {
        return <>{condition ? ComponentA() : ComponentB()}</> 
}

export default InPlaceConditionalRenderer
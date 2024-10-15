const LoadingComponent = (props) => {

    const test=props.test
    const Component = props.component

    const getComponentOrLoading = () => {
        if (test != undefined) {
            return <Component/>
        } else {
            return (<div>loading</div>)
        }
    }

    return getComponentOrLoading()
}
export default LoadingComponent
type LoadingComponentProps = {
    dataReady: boolean,
    children:  React.ReactNode
}

const LoadingComponent = ({dataReady, children}:LoadingComponentProps) => {
    if(!dataReady){
       return <div>loading</div>
    } 
    return <>{children}</> 

}
export default LoadingComponent
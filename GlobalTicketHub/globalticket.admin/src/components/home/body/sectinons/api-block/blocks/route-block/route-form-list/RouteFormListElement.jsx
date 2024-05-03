import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
const RouteFormListElement = ({name, index, dispatch, setSelectRoute, selectRoute, setSelectRouteId}) =>{
    const buttonClickHandle = () =>{
        if(name==selectRoute){
            setSelectRoute('')
            setSelectRouteId(-1)
        }
        dispatch({
            type: "DELETE",
            index: index
        })
        
    }
    const elClickHandle = () =>{
        setSelectRoute(name)
        setSelectRouteId(index)
    }
    return <div className={selectRoute==name?"route-form-list-element select-element":"route-form-list-element not-select-element"}>
        <p onClick={elClickHandle}>{name}</p>
        <button onClick={buttonClickHandle}><DeleteOutlined /></button>
    </div>
}
export default RouteFormListElement
import { useFormik } from "formik"
import './styles/RouteForm.css'
import * as Yup from 'yup'
import { useEffect, useState } from "react"
const RouteForm = ({dispatch, selectRoute, routes, selectRouteId,setSelectRouteId, setSelectRoute}) =>{
    const onSubmit = () => {
        if(selectRouteId===-1){
            dispatch({
                type:"ADD",
                point: values.point
            })
        } else {
            dispatch({
                type:"CHANGE",
                point: values.point,
                index: selectRouteId
            })
            setSelectRouteId(-1)
            selectRoute('')
        }
        setValues({...values, point:''})
    }
    
    const [routeOprions, setRouteOprions] = useState(['Test','Test2','Test3','Test4','Test5','Test6','Test7','Test8']);
    const [buttonText, setButtonText] = useState('Додати');
    
    
    
    useEffect(()=>{
        setValues({
            ...values,
            point:selectRoute
        })
    },[selectRoute])
    useEffect(()=>{
        if(selectRouteId!=-1){
            setButtonText("Змінити")
        } else {
            setButtonText("Додати")
        }
    },[selectRouteId])
    
    const {values, handleChange, handleBlur, handleSubmit, setValues} = useFormik({
        initialValues: {
            point: ''
        },
        validationSchema: Yup.object().shape({
            point: Yup.string().required('Це поле обов\'язкове для заповнення')
                                .oneOf(routeOprions,'Не існуючий маршрут')
                                .notOneOf(routes, 'Це значення вже використовується у маршруті')
                                
        }),
        onSubmit
    })
    return <div className="route-form">
        <form action="" autoComplete={false} onSubmit={handleSubmit}>
            <label htmlFor="">Станція</label>
            <br />
            <br />
            <input list='route_option' name="point" value={values.point} onChange={handleChange} onBlur={handleBlur} />
            <datalist id='route_option'>
                {routeOprions.map(r=><option value={r}/>)}
            </datalist>
            <br />
            <br />
            <br />
            <input type="submit" name="" id="" value={buttonText} />
        </form>
    </div>
}
export default RouteForm
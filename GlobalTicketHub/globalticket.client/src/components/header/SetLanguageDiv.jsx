import './styles/SetDiv.css'
const SetLanguageDiv = ({setLanguage,setVisible}) =>{
    const handle = () =>{
        setVisible(false)
    }
    return <div className="setdiv setlang">
        <p onClick={()=>{setLanguage("Укр"); handle();}}>Укр</p>
        <div className='divider'></div>
        <p onClick={()=>{setLanguage("Eng"); handle();}}>Eng</p>
    </div>
}
export default SetLanguageDiv;
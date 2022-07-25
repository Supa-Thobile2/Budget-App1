
import AddItems from './additem'
import DisplayTransaction from './DisplayTransaction';
function Home(props){
    return(
        <div className='container'>
            <DisplayTransaction list={props.list}/>
            <AddItems  add={props.add}/>           
        </div>
    )
}

export default Home;
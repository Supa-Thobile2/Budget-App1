import AddItems from './additem'//function that add items which is imported from an external javascript file (additem.js)
import DisplayTransaction from './DisplayTransaction';//function that displays transactions which is imported from an external javascript file (DisplayTransaction.js) 

function Home(props){
    return(
        
        <div className="Container">
            <DisplayTransaction list={props.list} />
            <AddItems add={props.add} />

        </div>
    )
}

export default Home
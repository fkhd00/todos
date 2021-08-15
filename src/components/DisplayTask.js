import React,{Component} from "react"
class DisplayTask extends Component{
    deleteMethod(e){
        
    }
    render(){
        return(
            <div>
                {this.props.tasks.map((task,index)=>{
                    return(
                        <div key={task.id}>
                            <p className="taskList">{task.text} 
                            <button onClick={(e)=>{
                                e.preventDefault()
                                document.getElementsByClassName("save")[index].style.display="block"
                            }}>Edit</button> 
                            
                            <button type="submit" onClick={(e)=>{
                                e.preventDefault()
                                this.props.clickedit(task.id)
                            }}>Delete</button></p> 
                            
                            <div className="save">
                                <input type="text" value={task.text} onChange={(e)=>{
                                    const targetValue=e.target.value;
                                    this.props.updateInput(targetValue,index)
                                }} ></input>
                                <button type="submit" className="saveButton" onClick={(e)=>{
                                    e.preventDefault()
                                    document.getElementsByClassName("save")[index].style.display="none"
                                    this.props.saveInput()
                                }}>Save</button>
                            </div>
                        </div>      
                    )
                })}
            </div>    

        )
    }
}
export default DisplayTask
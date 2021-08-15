import React,{Component} from "react"
import DisplayTask from "./components/DisplayTask"
import uniqid from "uniqid"

class App extends Component{
  constructor(){
    super()
    this.state={
      tasks:[],
      task:{text:"",id:uniqid()}
    }
    this.editTask=this.editTask.bind(this)
    this.updateTask=this.updateTask.bind(this)
    this.updateTasks=this.updateTasks.bind(this)
    this.updateInput=this.updateInput.bind(this)
    this.saveInput=this.saveInput.bind(this)
  }

  editTask(id){
    const newList=[...this.state.tasks]
    const updatedList=newList.filter(item=>item.id!==id)
    this.setState({
      tasks:updatedList,
      task:{text:"",id:uniqid()}
    })
  }
  
  updateTask=(e)=>{
    this.setState({task:{text:e.target.value,id:this.state.task.id}})
  }
  
  updateTasks=(e)=>{
    e.preventDefault();
    this.setState({tasks:this.state.tasks.concat(this.state.task),task:{text:"",id:uniqid()}})
  }
  updateInput(somevalue,ind){
    const newstate=[...this.state.tasks]
    const updatenewstate=newstate.map((item,index)=>{
      if(index===ind){
        return(item[index]={text:somevalue,id:item.id})
      }
      else return item
    })
    this.setState({
      tasks:updatenewstate,
      task:{text:somevalue,id:uniqid()}
    })
  }
  saveInput(){
    console.log("saved")
    this.setState(prevState=>{
      return{
        task:{text:"",id:uniqid()}
      }
    })
  }
  
  render(){
    return(
      <div className="appContainer">
        <form onSubmit={this.updateTasks}>
          <input type="text" placeholder="Enter The Task" onChange={this.updateTask} value={this.state.task.text} required></input>
          <button type="submit">Add</button>
              <DisplayTask tasks={this.state.tasks} clickedit={this.editTask} updateInput={this.updateInput} 
                saveInput={this.saveInput} updateTasks={this.updateTasks}/>
        </form>
      </div>
    )
  }
}
export default App
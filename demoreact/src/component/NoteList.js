import React, { Component } from 'react'
import NoteItem from './NoteItem'
import {dataNote} from './connectfb'
import { onValue } from 'firebase/database';
export default class NoteList extends Component {
  //conc -> tab
  constructor(props, context) {
    super(props, context);
    this.state={dataFirebase:[]}
  }
  //cwm
  componentWillMount() {
    onValue(dataNote, (snapshot) => {
      var arrayData=[];
      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var noteTitle = childSnapshot.val().noteTitle;
        var noteContent = childSnapshot.val().noteContent;
        arrayData.push({
          id: key,
          noteTitle: noteTitle,
          noteContent: noteContent
        })        
      })
      this.setState({dataFirebase:arrayData})    
    })
  } 
  getData=() =>{
    if(this.state.dataFirebase){
      return this.state.dataFirebase.map((value,key)=>{
        return(
          <NoteItem
            key={key}
            i={key}
            noteTitle={value.noteTitle}
            noteContent={value.noteContent}
            fstatusNut={()=>this.props.fstatusNut()}
            editFunClick={(info)=>this.props.edit(value)}
            deleteFunClick = {(id) => this.props.deleteInfo(value.id)}
            ></NoteItem>
          )
      })
    }
  }  
  render() {
    return (
        <div className="col-9">
        <div id="accordianId" role="tablist" aria-multiselectable="true">
          {this.getData()}
        </div>
      </div>      
    )
  }
}

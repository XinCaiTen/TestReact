import React, { Component } from 'react'
import { set,ref,getDatabase} from 'firebase/database';

export default class NoteEdit extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            id:this.props.noteEditObject.id,
            noteTitle:this.props.noteEditObject.noteTitle,
            noteContent:this.props.noteEditObject.noteContent
        }
    }
    
    isChange =(event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    // hàm lấy thông tin đã sửa vào firebase
    saveButton = ()=>{
    var info ={};
    info.id = this.state.id;
    info.noteTitle = this.state.noteTitle;
    info.noteContent = this.state.noteContent;
    const db = getDatabase();
        set(ref(db, 'note/' + info.id), {
            noteTitle:info.noteTitle,
            noteContent:info.noteContent
        });
        this.props.fstatusNut()
    }
  render() {
    return (
        <div className="col-sm-3">
        <h3>Sửa thông tin</h3>
        <div className="form-group">
          <label htmlFor="noteTitle">Tiêu đề Note</label>
          <input onChange={(event)=> this.isChange(event)} defaultValue={this.props.noteEditObject.noteTitle} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tiêu đề Note" />
        </div>
        <div className="form-group">
          <label htmlFor="noteContent">Nội dung Note</label>
          <textarea onChange={(event)=> this.isChange(event)} defaultValue={this.props.noteEditObject.noteContent} className="form-control" name="noteContent" id="noteContent" rows={3} />
        </div>
        <div className='text-center'>
            <button onClick={()=>this.props.fstatusNut()} type="submit" className="btn btn-secondary mr-2">Hủy</button>
            <button onClick={()=> this.saveButton()} type="submit" className="btn btn-secondary">Lưu</button>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class NoteItem extends Component {

  editClick=()=>{
    this.props.editFunClick();
    this.props.fstatusNut();
  }

  deleteClick=()=>{
    this.props.deleteFunClick()
  }
  render() {
    return (
        <div className="card">
        <div className="card-header" role="tab" id="note1">
        <div className='row'>
              <div className='col-9'>
              <h5 className="mb-0">            
            <a data-toggle="collapse" data-parent="#accordianId" href={"#a"+this.props.i} aria-expanded="true" aria-controls="noteContent1">
              {this.props.noteTitle}
            </a>
          </h5>
              </div>
              <div className='col-3'>
                <div onClick={()=>this.editClick()} class="btn btn-info mr-2">Sửa</div>
                <div onClick={()=>this.deleteClick()} class="btn btn-danger">Xóa</div>
              </div>
            </div>          
        </div>
        <div id={"a"+this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
          <div className="card-body">
            {this.props.noteContent}
          </div>
        </div>
      </div>
    )
  }
}

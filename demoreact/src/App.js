import { useState } from "react";
import './App.css';
import Menu from './component/Menu';
import NoteAdd from './component/NoteAdd';
import NoteList from './component/NoteList';
import {dataNote} from './component/connectfb'
import { push, getDatabase, ref, remove,child } from 'firebase/database';
import NoteEdit from './component/NoteEdit';

const getData = (info) =>{
  alert('thông tin bố nhận được ' + info);
  push(dataNote,info);
}

function App() {
  // khai báo state điều khiển thay đổi form
  const[status, setStatus] = useState(true);

  // hàm đổi trạng thái true -> false
  const trangthaiNut0=()=>{
    setStatus(false);
  }
  // hàm đổi trạng thái false->true
  const trangthaiNut1=()=>{
    setStatus(true);
  }

  //state lưu thông tin sửa
  const [noteEditObject,setNoteEditObject] = useState({});

  // hàm lấy thông tin cần sửa
  const editInfo=(info)=>{
    setNoteEditObject(info);
}

// hàm lấy thông tin xóa
const deleteData = (id)=>{
  const db = getDatabase();
  var data=ref(db,'note/');  
  remove(child(data,id));
  alert('đã xóa dữ liệu có id là: ' + id);
}

  const activeForm = ()=>{
    if (status===true) {
      return(
        <NoteAdd getData={(info)=> getData(info)}></NoteAdd>      
      )
    }
    else 
      return(
        <NoteEdit fstatusNut = {()=> trangthaiNut1()}
          noteEditObject={noteEditObject}>
          </NoteEdit>              
      )    
  }
  return (
    <div>
      <Menu></Menu>
      <div class="container">
        <div class="row">
          <NoteList fstatusNut = {()=> trangthaiNut0()}
            edit= {(info)=>editInfo(info)}
            deleteInfo = {(id) => deleteData(id)}
          ></NoteList>
          {activeForm()}
          </div>
        </div>
    </div>
  );
}
export default App;

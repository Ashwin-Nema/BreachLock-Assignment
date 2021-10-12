import { useSelector, useDispatch } from 'react-redux'
import { NewSortedList } from './actions'
import { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css'
import { makenewuserdateobject } from './utils'

function App() {

  const dispatch = useDispatch()

  const { UserNotesList } = useSelector(state => state)
  const [date, changedate] = useState(new Date())
  const [title, changetitle] = useState("")
  const [content, changecontent] = useState("")


  const savenewcard = () => {
    const listitems = [...UserNotesList]
    listitems.push({ title, content, date: makenewuserdateobject(date) })

    listitems.sort((a, b) => {
      const date1 = new Date(b.date)
      const date2 = new Date(a.date)
      return date1.getTime() - date2.getTime()
    })
    dispatch(NewSortedList(listitems))
    changetitle("")
    changecontent("")
  }
    ;

  return (
    <div className="maingrid mx-3 mt-3" >
      <div className="w-100">
        <Calendar
          onChange={changedate}
          value={date}

          minDate={new Date()}
        />

        <h3 className="my-3">Title</h3>

        <input className="form-control" type="text" value={title} onChange={(e) => changetitle(e.target.value)} />

        <h3 className="my-3">Body Content</h3>

        <textarea className="form-control" value={content} onChange={(e) => changecontent(e.target.value)}></textarea>

        <div className="d-flex justify-content-center mt-3">
          <button onClick={savenewcard} className={`btn btn-primary ${title.trim() === "" || content.trim() === "" ? "disabled" : ""}`} >Save Note </button>
        </div>

      </div>

      <div >
        {UserNotesList.map((item, index) => {
          const { title, content } = item
          return (
            <div className="alert alert-warning text-break" role="alert" key={index} >
              <h3>Title</h3>
              <p >{title}</p>
              <h3>Body Content</h3>
              <p >{content}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;

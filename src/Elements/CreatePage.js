import React, { useState } from 'react'
import '../Css/CreatePage.css'
import axios from 'axios';

const CreatePage = ({API_URL}) => {

  const [chapterNo, setChapterNo] = useState('');
  const [isSolved, setIsSolved] = useState('');
  const [question, setQuestion] = useState('');
  const [totalMark, setTotalMark] = useState('');
  const [obtainedMark, setObtainedMark] = useState('');

  const handleChange = (e, text) => {

    switch (text) {
      case "ch":
        setChapterNo(e.target.value)
        break;
      case "sl":
        setIsSolved(e.target.value)
        break;
      case "que":
        setQuestion(e.target.value)
        break;
      case "tm":
        setTotalMark(e.target.value)
        break;
      case "obm":
        setObtainedMark(e.target.value)
        break;
      default:
        break;
    }

  }

  const handleSubmit = async(e) => {

    e.preventDefault()
    let intChNo = parseInt(chapterNo)
    let intTm = parseInt(totalMark)
    let intObm = parseInt(obtainedMark)

    const formData = {
      chapter_no:intChNo,
      question: question,
      solve_status: isSolved,
      total_marks: intTm,
      obtained_mark: intObm,
      status: null,
      question_no: null,
      operation: "CreateQuestion"
    }

    const response = await axios({
      method: 'post',
      url:API_URL,
      data:formData
    });

    const res = response.data;

    setChapterNo('')
    setIsSolved('')
    setQuestion('')
    setTotalMark('')
    setObtainedMark('')

  }
  return (
    <>
      <div className='container'>
        <h6>Post Questions</h6>
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">

              <input type="text" value={chapterNo} onChange={(e) => handleChange(e, 'ch')} class="form-control" id="inputEmail4" placeholder="Chapter No" />
            </div>
            <div class="form-group col-md-6">

              <select value={isSolved} onChange={(e) => handleChange(e, 'sl')} class="form-control" id="exampleFormControlSelect1">
                <option>Select Solved Status</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div>
              <textarea class="form-control" value={question} onChange={(e) => handleChange(e, 'que')} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">

              <input type="text" value={totalMark} onChange={(e) => handleChange(e, 'tm')} class="form-control" id="inputCity" placeholder='Total Mark' />
            </div>
            <div class="form-group col-md-6">

              <input type="text" value={obtainedMark} onChange={(e) => handleChange(e, 'obm')} class="form-control" id="inputCity" placeholder='Obtained Mark' />
            </div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default CreatePage
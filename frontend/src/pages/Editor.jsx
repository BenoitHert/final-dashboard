import React, {useEffect, useState} from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEditor, reset, updateEditor} from '../features/editor/editorSlice'
// import Spinner from '../components/Spinner';

function Editor() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [text, setText] = useState('')



  const {user} = useSelector((state) => state.auth)
  // const { editor, isLoading, isError, message } = useSelector(
  //   (state) => state.editor
  // )

  useEffect(() => {
    // if(isError) {
    //   console.log(message)
    // }

    if(!user){
      navigate('/login')
    }

    dispatch(getEditor())

    return() => {
      dispatch(reset())
    }
  }, [user, navigate, dispatch])





  // if(isLoading) {
  //   return <Spinner />
  // }
  return (
    <div>
        <div className="editor w pt-40 pl-80 mr-0">
          <CKEditor 
          editor={ClassicEditor}
          data={text}
          onChange={(event, editor) => {
            const data = editor.getData()
            setText(data)
          }}
          />
        </div>
        <div className='pt-10 pl-80'>
          <button 
          onClick={() => dispatch(updateEditor({text}))} 
         className='bg-blue-400 text-white  text-center items-center justify-around flex cursor-pointer font-bold text-lg border-solid rounded p-2 mr-8 hover:scale-110'>
            Sauvegarder
          </button>
        </div>




    </div>
  )
}

export default Editor
import {useEffect, useState} from 'react'
import axios from  '../config/axios'
import BookTable from '../components/BookTable'
import PropTypes from 'prop-types'
import { BookContext } from '../context/BookContext'

function BookList({owner}) {

  const [bookList, setBookList] = useState([])

  const getTasks = async () => {
    try {
      console.log("Token en encabezados de la solicitud:", localStorage.getItem("token"));
       const res = await axios.get("/libros")
       console.log(res)
       setBookList(res.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect( () => {getTasks()}, [])

  return (
    <BookContext.Provider value={{}}>
      <BookTable books={bookList}/>
    </BookContext.Provider>
  )
}

BookList.propTypes = {
  owner: PropTypes.string
}

export default BookList
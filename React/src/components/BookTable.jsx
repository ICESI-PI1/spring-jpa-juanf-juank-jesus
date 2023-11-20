import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import BookRow from './BookRow'

function  BookTable ({books}) {

  const  renderBooks = () => {
    return  books.map((book)=>

         (<BookRow key={book.id} book={book}/>)
    )
  }


  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>UserId</TableCell>
          <TableCell align="right">Title</TableCell>
          <TableCell align="left">Publication Date</TableCell>
          <TableCell align="left">Author</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderBooks()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


BookTable.propTypes = {
    books: PropTypes.array
}

export default BookTable
import { TableContainer, TableRow, TableHead, Table,  TableCell, TableBody, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import AuthorRow from './AuthorRow'

function  AuthorTable ({authors}) {

  const  renderAuthors = () => {
    return  authors.map((author)=>
         (<AuthorRow key={author.id} author={author}/>)
    )
  }

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="right">Name</TableCell>
          <TableCell align="left">Nacionality</TableCell>
          <TableCell align="left">Books</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderAuthors()}
      </TableBody>
      </Table>
    </TableContainer>  
    )
}


TaskTable.propTypes = {
    author: PropTypes.array
}

export default AuthorTable
import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'

function BookRow({book}) {

    return (
        <TableRow
                key={book.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

            <TableCell component="th" scope="row">
                {book.id}
            </TableCell>

            <TableCell align="right">{book.title}</TableCell>
            <TableCell align="left">{book.publicationDate}</TableCell>
            <TableCell align="left">{book.author?.name}</TableCell>

        </TableRow>  
    )
}

BookRow.propTypes = {
    book: PropTypes.object
}

export default BookRow

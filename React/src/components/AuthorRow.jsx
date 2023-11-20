import PropTypes from 'prop-types'
import { TableRow, TableCell, Button, } from '@mui/material'

function AuthorRow({author}) {

    return (
        <TableRow
                key={author.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >

            <TableCell component="th" scope="row">
                {book.id}
            </TableCell>

            <TableCell align="right">{author.name}</TableCell>
            <TableCell align="left">{author.nacionality}</TableCell>
            <TableCell align="left">{author.books}</TableCell>
        </TableRow>  
    )
}

TaskRow.propTypes = {
    author: PropTypes.object
}

export default AuthorRow

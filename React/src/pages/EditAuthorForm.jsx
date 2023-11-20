import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const EditAuthorForm = ({ open, handleClose, handleSave, editAuthor, handleChange }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar Autor</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Nombre"
          type="text"
          fullWidth
          variant="standard"
          value={editAuthor.name || ''}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="nationality"
          label="Nacionalidad"
          type="text"
          fullWidth
          variant="standard"
          value={editAuthor.nationality || ''}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave}>Guardar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditAuthorForm;

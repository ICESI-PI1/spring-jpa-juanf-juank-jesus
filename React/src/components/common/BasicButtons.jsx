import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ onBooksClick, onAuthorsClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onBooksClick}>
        Tabla de Autores
      </Button>
      <Button variant="contained" onClick={onAuthorsClick}>
        Tabla de Libros
      </Button>
    </Stack>
  );
}
package icesi.edu.datamodel.service;

import icesi.edu.datamodel.persistence.model.Author;
import icesi.edu.datamodel.persistence.model.Book;
import icesi.edu.datamodel.persistence.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    private Author author;
    private Book book;

    @BeforeEach
    void setUp() {
        // Inicializa la lista de libros como vacía para el constructor del autor.
        List<Book> books = new ArrayList<>();

        // Crea un autor con valores ficticios para los campos requeridos.
        author = new Author(1L, "Gabriel Garcia Marquito", "Colombiano papa", books);

        // Crea un libro con valores ficticios para los campos requeridos.
        // La fecha de publicación se establece con la fecha actual para simplificar.
        book = new Book(1L, "100 años de soledad una obra maestra", new Date(), author);

        // Si es necesario que el autor tenga libros, puedes agregar el libro creado al autor.
        books.add(book);
    }

    @Test
    void whenFindAll_thenAllBooksShouldBeReturned() {
        List<Book> expectedBooks = Arrays.asList(book);
        when(bookRepository.getAll()).thenReturn(expectedBooks);

        List<Book> actualBooks = bookService.findAll();

        assertEquals(expectedBooks, actualBooks);
        verify(bookRepository).getAll();
    }

    @Test
    void whenFindById_thenCorrectBookShouldBeReturned() {
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        Optional<Book> foundBook = bookService.findById(1L);

        assertTrue(foundBook.isPresent());
        assertEquals(book, foundBook.get());
        verify(bookRepository).findById(1L);
    }

    @Test
    void whenAdd_thenBookShouldBeAdded() {
        when(bookRepository.add(book)).thenReturn(true);

        boolean isAdded = bookService.add(book);

        assertTrue(isAdded);
        verify(bookRepository).add(book);
    }

    @Test
    void whenUpdate_thenBookShouldBeUpdated() {
        when(bookRepository.update(1L, book)).thenReturn(true);

        boolean isUpdated = bookService.update(1L, book);

        assertTrue(isUpdated);
        verify(bookRepository).update(1L, book);
    }

    @Test
    void whenDelete_thenBookShouldBeDeleted() {
        when(bookRepository.delete(1L)).thenReturn(true);

        boolean isDeleted = bookService.delete(1L);

        assertTrue(isDeleted);
        verify(bookRepository).delete(1L);
    }
}
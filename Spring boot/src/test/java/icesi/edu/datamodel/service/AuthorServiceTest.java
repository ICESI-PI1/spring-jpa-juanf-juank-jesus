package icesi.edu.datamodel.service;

import icesi.edu.datamodel.persistence.model.Author;
import icesi.edu.datamodel.persistence.model.Book;
import icesi.edu.datamodel.persistence.repository.AuthorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class AuthorServiceTest {

    @Mock
    private AuthorRepository authorRepository;

    @InjectMocks
    private AuthorService authorService;

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
    public void whenFindAll_thenAuthorsShouldBeReturned() {
        List<Author> expectedAuthors = Arrays.asList(author);
        when(authorRepository.getAll()).thenReturn(expectedAuthors);

        List<Author> authors = authorService.findAll();

        assertEquals(expectedAuthors, authors);
    }

    @Test
    public void whenFindById_thenAuthorShouldBeReturned() {
        when(authorRepository.findById(1L)).thenReturn(Optional.of(author));

        Optional<Author> found = authorService.findById(1L);

        assertTrue(found.isPresent());
        assertEquals(author, found.get());
    }

    @Test
    public void whenSave_thenAuthorShouldBeSaved() {
        when(authorRepository.add(author)).thenReturn(true);

        Author saved = authorService.save(author);

        assertEquals(author, saved);
    }

    @Test
    public void whenUpdate_thenAuthorShouldBeUpdated() {
        when(authorRepository.update(1L, author)).thenReturn(true);

        boolean isUpdated = authorService.update(1L, author);

        assertTrue(isUpdated);
    }

    @Test
    public void whenDelete_thenAuthorShouldBeDeleted() {
        when(authorRepository.delete(1L)).thenReturn(true);

        boolean isDeleted = authorService.delete(1L);

        assertTrue(isDeleted);
    }

    @Test
    public void whenFindBooksByAuthor_thenBooksShouldBeReturned() {
        List<Book> expectedBooks = Arrays.asList(book);
        when(authorRepository.getBooks(1L)).thenReturn(expectedBooks);

        List<Book> books = authorService.findBooksByAuthor(1L);

        assertEquals(expectedBooks, books);
    }
}
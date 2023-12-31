package icesi.edu.datamodel.service;

import icesi.edu.datamodel.persistence.model.Author;
import icesi.edu.datamodel.persistence.model.Book; // Asegúrate de que esta importación sea correcta
import icesi.edu.datamodel.persistence.repository.AuthorRepository;
import icesi.edu.datamodel.service.DTO.BookNameDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {

    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> findAll() {
        return authorRepository.getAll();
    }

    public Optional<Author> findById(Long id) {
        return authorRepository.findById(id);
    }

    public Author save(Author author) {
        if (authorRepository.add(author)) {
            return author;
        }
        throw new RuntimeException("Error saving the author");
    }

    public boolean update(Long id, Author author) {
        return authorRepository.update(id, author);
    }

    public boolean delete(Long id) {
        return authorRepository.delete(id);
    }

    public List<BookNameDTO> findBooksByAuthor(Long id) {
        List<Book> b = authorRepository.getBooks(id);
        List<BookNameDTO> books = new ArrayList<>();

        for (Book book : b) {
            BookNameDTO bk = new BookNameDTO();
            bk.setTitle(book.getTitle());
            books.add(bk);
        }

        return books;
    }
}
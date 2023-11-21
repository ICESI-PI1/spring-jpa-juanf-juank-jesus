package icesi.edu.datamodel.persistence.model;

import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private Date publicationDate;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private Author author;
}

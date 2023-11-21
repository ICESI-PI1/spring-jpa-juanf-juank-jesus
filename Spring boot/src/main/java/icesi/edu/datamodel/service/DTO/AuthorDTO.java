package icesi.edu.datamodel.service.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AuthorDTO {
    private Long id;
    private String name;
    private String nacionality;
}

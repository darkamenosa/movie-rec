package vn.xilo.movierec.movie;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by tuyenhx on 10/23/17
 */
@Entity
@Table(name = "movie")
@Data
@Builder
@NoArgsConstructor(staticName = "of")
@AllArgsConstructor
public class Movie implements Serializable {
   @Id
   @GeneratedValue
   @Column(name = "id")
   private Long id;

   @Column(name = "name")
   private String name;
}

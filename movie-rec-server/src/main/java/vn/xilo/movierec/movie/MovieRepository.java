package vn.xilo.movierec.movie;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by tuyenhx on 10/23/17
 */
public interface MovieRepository extends JpaRepository<Movie, Long> {
}

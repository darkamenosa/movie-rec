package vn.xilo.movierec.movie;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;
import java.util.List;

/**
 * Created by tuyenhx on 10/23/17
 */
@Service
@Slf4j
public class MovieService {

    public List<Movie> getMovies() {
        return Collections.emptyList();
    }
}

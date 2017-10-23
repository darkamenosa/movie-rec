package vn.xilo.movierec.movie;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by tuyenhx on 10/24/17
 */
@RestController
@Slf4j
public class RecommendationController {
    @GetMapping("/api/recommendations")
    public Page<Movie> getRecommendations() {
        return Page.empty();
    }
}

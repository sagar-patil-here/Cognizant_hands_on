import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class REST_Country_Web_Service {
    @GetMapping("/country")
    public String getCountry() {
        return "Country Details";
    }
}

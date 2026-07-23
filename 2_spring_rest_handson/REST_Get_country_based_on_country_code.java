import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class REST_Get_country_based_on_country_code {
    @GetMapping("/country/{code}")
    public String getCountryByCode(@PathVariable String code) {
        return "Country Code: " + code;
    }
}

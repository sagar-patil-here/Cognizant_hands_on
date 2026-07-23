import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Hello_World_RESTful_Web_Service {
    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }
}

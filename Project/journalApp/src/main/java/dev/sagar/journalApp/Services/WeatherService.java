package dev.sagar.journalApp.Services;

import dev.sagar.journalApp.api.response.WeatherResponse;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Getter
@Setter
public class WeatherService {

    @Value("${weather.api.key}")
    private String apiKey;
    @Autowired
    private RestTemplate rest;
    private String BaseUrl = "http://api.weatherstack.com/current?access_key=<KEY>&query=<CITY>";

    public WeatherResponse getWeather(String city) {
        String Final_Api_url = BaseUrl.replace("KEY", apiKey).replace("CITY", city);
        ResponseEntity<WeatherResponse> resp = rest.exchange(Final_Api_url, HttpMethod.GET, null, WeatherResponse.class);
        return resp.getBody();

    }


}

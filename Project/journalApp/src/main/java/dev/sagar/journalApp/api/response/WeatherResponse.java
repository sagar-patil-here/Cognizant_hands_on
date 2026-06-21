package dev.sagar.journalApp.api.response;

import lombok.Getter;
import lombok.Setter;

// import com.fasterxml.jackson.databind.ObjectMapper; // version 2.11.1
// import com.fasterxml.jackson.annotation.JsonProperty; // version 2.11.1
/* ObjectMapper om = new ObjectMapper();
Root root = om.readValue(myJsonString, Root.class); */
@Getter
@Setter
public class WeatherResponse {

    private Current current;

    @Getter
    @Setter
    public static class Current {
        int temperature;
    }

}


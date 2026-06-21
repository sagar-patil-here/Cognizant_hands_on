package dev.sagar.journalApp.Cache;

import dev.sagar.journalApp.MongoConnRepo.JournalConfigRepo;
import dev.sagar.journalApp.entity.JournalConfig;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class AppCache {
    @Autowired
    private JournalConfigRepo jcr;
    private Map<String, String> cache;

    @PostConstruct
    public void init() {
        cache = new HashMap<>();
        List<JournalConfig> all = jcr.findAll();
        for (JournalConfig jc : all) {
            cache.put(jc.getKey(), jc.getValue());
        }


    }


}

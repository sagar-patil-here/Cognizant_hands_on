package dev.sagar.journalApp.MongoConnRepo;

import dev.sagar.journalApp.entity.JournalConfig;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JournalConfigRepo extends MongoRepository<JournalConfig, ObjectId> {
}

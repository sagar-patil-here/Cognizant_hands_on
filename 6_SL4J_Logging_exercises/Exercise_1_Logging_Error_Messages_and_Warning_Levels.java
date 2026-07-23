import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Exercise_1_Logging_Error_Messages_and_Warning_Levels {
    private static final Logger logger = LoggerFactory.getLogger(Exercise_1_Logging_Error_Messages_and_Warning_Levels.class);
    public static void main(String[] args) {
        logger.warn("This is a warning message");
        logger.error("This is an error message");
    }
}

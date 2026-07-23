import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class Exercise_4_Arrange_Act_Assert_Pattern {
    @Test
    public void testAAA() {
        // Arrange
        int a = 5;
        int b = 10;
        // Act
        int sum = a + b;
        // Assert
        assertEquals(15, sum);
    }
}

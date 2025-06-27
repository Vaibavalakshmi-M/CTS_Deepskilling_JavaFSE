package com.example;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;

public class MyServiceTest {
	 @Test
	    public void testVerifyInteraction() {
	        // Step 1: Create mock
	        ExternalApi mockApi = mock(ExternalApi.class);

	        // Step 2: Call method
	        MyService service = new MyService(mockApi);
	        service.fetchData();

	        // Step 3: Verify interaction
	        verify(mockApi).getData();
	    }
}

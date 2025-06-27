package com.example;

import static org.junit.Assert.*;

import org.junit.Test;

public class calculatorTest {

	@Test
	public void testAdd() {
		Calculator c = new Calculator();
		assertEquals(5, c.add(2, 3));
	}

}

package com.example;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class BankAccountTest {
	private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount();
        System.out.println("Setup: New account created");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown: Test completed");
    }

    @Test
    public void testDeposit() {
        int depositAmount = 1000;
        account.deposit(depositAmount);
        assertEquals(1000, account.getBalance());
    }

    @Test
    public void testWithdraw() {
        account.deposit(500);
        int withdrawAmount = 200;
        account.withdraw(withdrawAmount);
        assertEquals(300, account.getBalance());
    }

    @Test
    public void testWithdrawMoreThanBalance() {
        account.deposit(100);
        account.withdraw(200);
        assertEquals(100, account.getBalance());
    }
}

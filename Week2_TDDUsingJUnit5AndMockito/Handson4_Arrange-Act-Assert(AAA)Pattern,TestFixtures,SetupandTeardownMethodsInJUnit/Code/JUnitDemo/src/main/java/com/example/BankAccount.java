package com.example;

public class BankAccount {
	private int balance;
    public BankAccount() {
        this.balance = 0;
    }
    public void deposit(int amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    public void withdraw(int amount) {
        if (amount > 0 && amount <= balance) {
            this.balance -= amount;
        }
    }
    public int getBalance() {
        return this.balance;
    }
}

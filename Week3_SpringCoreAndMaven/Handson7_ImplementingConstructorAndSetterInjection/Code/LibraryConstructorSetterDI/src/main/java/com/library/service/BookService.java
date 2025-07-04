package com.library.service;

import com.library.repository.BookRepository;
public class BookService {
	private BookRepository bookRepository;
    private String message;

    // ✅ Constructor injection
    public BookService(String message) {
        this.message = message;
    }

    // ✅ Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Message: " + message);
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}

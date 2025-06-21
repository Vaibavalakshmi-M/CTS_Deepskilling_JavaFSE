package cts;
import java.util.Arrays;
import java.util.Comparator;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product[] products = {
	            new Product(105, "Shoes", "Fashion"),
	            new Product(101, "Laptop", "Electronics"),
	            new Product(103, "Phone", "Electronics"),
	            new Product(102, "Book", "Education")
	        };
	        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
	        int targetId = 103;
	        Product linearResult = SearchFunctions.linearSearch(products, targetId);
	        System.out.println("Linear Search: " + (linearResult != null ? linearResult : "Product not found"));
	        Product binaryResult = SearchFunctions.binarySearch(products, targetId);
	        System.out.println("Binary Search: " + (binaryResult != null ? binaryResult : "Product not found"));
	}

}

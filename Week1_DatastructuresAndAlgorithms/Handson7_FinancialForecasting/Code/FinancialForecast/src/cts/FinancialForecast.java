package cts;

public class FinancialForecast {
	public static double futureValueRecursive(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;
        }
        return futureValueRecursive(initialAmount, growthRate, years - 1) * (1 + growthRate);
    }

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double initialAmount = 10000; 
        double growthRate = 0.05; 
        int years = 5;
        double result = futureValueRecursive(initialAmount, growthRate, years);
        System.out.printf("Predicted future value after %d years: ₹%.2f\n", years, result);
	}

}

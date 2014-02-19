/*
*
* Program: Example 5 Page 145
* Name: Stanley Zheng
* Description: print from 2 to the posted number multiplying by numbers
*/
import java.util.Scanner;

public class Multiple{
    public static void main(String[] args){

  	int product = 1;

	System.out.print("Enter the Mutiple:");
	Scanner stdIn = new Scanner(System.in);

	int num = stdIn.nextInt();
    System.out.print("Multiplying " + product);
    for (int i=2; i<=num; i+=2){
    	System.out.print("*"+ i);
        product *= i;
    }
    System.out.println("= " + product);
    }
}

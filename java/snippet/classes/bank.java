
// Program: Bank
// Programmer: Onapha Rattana
// Description:
// Write a program that prompts the user for a starting balance 
//and then prints the number of years it takes to reach $100,000 and also the number of years it takes to reach $1,000,000.
// Date: 2/18/2014

import java.util.Scanner;

public class Bank{
    public static void main(String[] args){

  	int balance = 0;
	int years = 0;
	boolean check = false;

	Scanner stdIn = new Scanner(System.in);
	balance = stdIn.nextInt();

	System.out.print("Enter Balance:");
	while (balance < 1000000){
		balance = balance*2;
		years++;
		if(balance > 100000 && check==false){
			System.out.println("You now have " + balance);
		    System.out.println("You have a bit over 100,000");
		    check = true;
		}
		else{
		    System.out.println("This year your balance is"+ balance);
		}
	}

    System.out.println("You have a bit over 1,000,000!");
    System.out.println("It took" + years);
    }
}
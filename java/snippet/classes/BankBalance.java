/*
Program: Bank Balance **:
Programmer: Stanley Zheng
Description:
Write a program that prompts the user for a starting balance and then prints the number of years it takes to reach $100,000 and also the number of years it takes to reach $1,000,000.
Date: 2/19/2014
*/


import java.util.Scanner;

public class BankBalance{
    public static void main(String[] args){

  	int balance = 0;
  	int million = 1000000;
 	int hundred = 100000;

	System.out.print("Enter Starting Balance:");
	Scanner stdIn = new Scanner(System.in);
	balance = stdIn.nextInt();
	boolean flag = false;
	int years = 0;

	while (balance < million){
		balance = balance*2;
		years++;
		if(balance > hundred && flag==false){
		    System.out.println("Congratulations you hit 100,000");
		    System.out.println("You now have " + balance);
		    flag = true;
		}
		else{
		    System.out.println("You now have " + balance);
		}
	}

    System.out.println("Congratulations you hit 1,000,000");
    System.out.println("It will take " + years + " years to be a millionare");
    }
}
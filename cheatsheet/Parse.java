
// Program: Parse
// Programmer: Stanly Zheng
// Description:
// Write a program that generalizes if variable name is acceptable,
/*
is (1) illegal,
		contains
   (2) legal, but uses poor style, or
   (3) good. There are different opinions as to what constitutes good style for a variable name.
   For this program, check for good style using these rules:
   Only use letters and digits.
   Use a lowercase letter for the first character.


// Date: 2/18/2014
*/
import java.util.Scanner;
import java.util.regex.*;

public class Parse{
    public static void main(String[] args){

    //Define case rules
	String legal = "Legal, but uses poor style.";
	String good =  "Good";
	String illegal =  "illegal";
	String classification;
	String line;
	Scanner stdIn = new Scanner(System.in);

	System.out.println("Enter a variable:");
	System.out.println("To exit type 'q' or utilize the shortcut ctr+c");
	//get line
	line = stdIn.nextLine();
	//prompt user to quit with typing ctr+c or hitting keyboardshortcut
	while (!line.equalsIgnoreCase("q")){
   	 char[] parts = line.toCharArray();
	    if (line.matches("[A-Za-z0-9]+")==false)
	    	classification=illegal;//if not alphanumeric
	    else if(!Character.isLowerCase(parts[0]))
	    	classification=legal; //if not first letter lower
	    else
	    	classification=good; //else good

	    System.out.println("your varible \""+ line + "\" is "+classification);

	    line = stdIn.nextLine();
    	}
    }
}
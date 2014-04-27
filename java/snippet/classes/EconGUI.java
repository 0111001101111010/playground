
/*
Program: Bank Balance **:
Programmer: Stanley Zheng
Description: Write a GUI program that applies these economic policy practices. More specifically, read in growthRate and inflation values and output the recommended economic policy for the given economic situation. If there is no recommended economic policy for the given economic situation, then output “No change in economic policy.” in the message dialog box.
Date: 2/19/2014
*/


import java.util.Scanner;
import javax.swing.*;

public class EconGUI{
    public static void main(String[] args){
    	double growth=0;
    	double inflation=0;
    	String text = "test";

		JPanel p1 = new JPanel();
		p1.add(new JLabel("Enter Annual Growth Rate in percent:"));
		p1.add(new JTextField(9));
		JPanel p2 = new JPanel();
		p2.add(new JLabel("Enter Annual Inflation in percent:"));
		p2.add(new JTextField(9));

		growth  = Double.parseDouble(p1);
		inflation= Double.parseDouble(p2);

		if ((growth < 1 )&&(inflation<3)){
			text =	"Increase welfare spending, reduce personal taxes, and decrease discount rate.";
		}
		else if (growth<1){
			text =	"Reduce business taxes.";
		}
		else if (inflation>3){
			text = "Increase personal and business taxes, and decrease discount rate.";
		}
		else{
			text = "Increase discount rate.";
		}
		Object[] message = {p1, p2};
		JOptionPane.showMessageDialog(null, text);
	}
}

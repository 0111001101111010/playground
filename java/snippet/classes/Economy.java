

// Program: Economy
// Programmer: Onapha Rattana 
// Description: Write a GUI program that applies these economic policy practices. More specifically, read in growthRate and inflation values and output the recommended economic policy for the given economic situation.
// Date: 2/19/2014

import java.util.Scanner;
import javax.swing.*;

public class Economy{
    public static void main(String[] args){
    	double growth=0.0;
    	double inflation=0.0;
    	String advice = "";

		JPanel panel1 = new JPanel();
		panel1.add(new JLabel("Enter Annual Growth Rate in percent:"));
		panel1.add(new JTextField(9));
		JPanel panel2 = new JPanel();
		panel2.add(new JLabel("Enter Annual Inflation in percent:"));
		panel2.add(new JTextField(9));

		growth  = Double.parseDouble(panel1.getText());
		inflation= Double.parseDouble(panel2.getText());

		if ((growth < 1 )&&(inflation<3)){
			if(inflation>3)
				advice = "Reduce business taxes.";
			else
			advice = "Increase welfare spending, reduce personal taxes, and decrease discount rate.";
		}
		else if (growth>4){
			if (inflation>3)
				advice = "Increase discount rate.";
			else
			advice = "Increase personal and business taxes, and decrease discount rate.";
		}
		else{
			advice ="No change in economic policy";
		}
		JOptionPane.showMessageDialog(null, advice);
	}
}

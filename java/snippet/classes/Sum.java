/*
*
* Program: Example 3 Page 145
* Name: Stanley Zheng
*/

public class Sum{
    public static void main(String[] args){
        int count = 0;
        int sum = 0;
        int product = 1;
        do{
            count ++;
            sum = sum + count;
            product = product + count;
            if(count == 5){
                System.out.println("Sum = " + sum);
                System.out.println("Product = " + product);
            }
        }
        while (count < 5);
    }
}

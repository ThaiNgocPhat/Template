import java.util.Scanner;
import java.util.Stack;

public class Exercise1 {
    public static void main(String[] args) {
        //tạo Stack để lưu trữ
        Stack<String> stack = new Stack<>();
        //cho nhập số lượng từ từ bàn phím
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập số lượng tù cần nhập: ");
        int numOfWords = Integer.parseInt(sc.nextLine());

        //tạo vòng for với số lần lặp bằng tổng số từ nhập
        for(int i = 0; i < numOfWords; i++){
            System.out.print("Nhập từ thứ" + " " +(i + 1) + ":"  + " ");
            String word = sc.nextLine();
            stack.push(word);
        }
        //tạo vòng lặp in ra với ohuowng thức pop()
        System.out.println("Thứ tự đảo ngược là: ");
        while(!stack.isEmpty()){
            System.out.print(stack.pop());
        }
    }
}

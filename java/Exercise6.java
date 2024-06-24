import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Scanner;

public class Exercise6 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //tạo Queue
        Queue<String> queue = new ArrayDeque<>();
        //nhập số lượng của mảng
        System.out.println("Nhập số lượng phần tử mảng: ");
        int n = Integer.parseInt(sc.nextLine());
        //tạo mảng với số lượng phần tử
        int[] numArr = new int[n];
        //duyệt qua các phần tử và đưa nó và queue
        for(int i = 0; i < n; i++){
            System.out.println("Nhập phần tử thứ"+(i +1) + ':' + " ");
            int number = Integer.parseInt(sc.nextLine());
            numArr[i] = number;
            queue.add(String.valueOf(number));
        }
        //lấy phần tử đầu tiên ra khỏi queue so sánh với tất cả các phần tử,số nhỏ nhất sẽ được đẩy lên đầu và in ra mảng đó
        //sử dụng for
        for(int i = 0; i < n; i++){
            int min = Integer.MAX_VALUE;
            for(String num : queue){
                int numInt = Integer.parseInt(num);
                if(numInt < min){
                    min = numInt;
                }
            }
            System.out.print(min + " ");
            queue.remove(String.valueOf(min));
        }
        sc.close();  //đóng scanner
    }
}

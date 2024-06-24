import java.util.Scanner;
import java.util.Stack;

public class Exercise5 {
    public static void main(String[] args) {
       Scanner scanner = new Scanner(System.in);

        // Nhập kích thước của mảng
        System.out.print("Nhập kích thước của mảng: ");
        int n = scanner.nextInt();

        // Khởi tạo mảng
        int[] array = new int[n];

        // Nhập các phần tử của mảng
        System.out.println("Nhập các phần tử của mảng:");
        for (int i = 0; i < n; i++) {
            array[i] = scanner.nextInt();
        }

        // Gọi hàm tìm kiếm phần tử lớn nhất
        int maxElement = findMaxElement(array);

        // In ra phần tử lớn nhất
        System.out.println("Phần tử lớn nhất trong mảng là: " + maxElement);

        // Đóng scanner
        scanner.close();
    }

    // Hàm tìm kiếm phần tử lớn nhất trong mảng sử dụng Stack
    public static int findMaxElement(int[] array) {
        Stack<Integer> stack = new Stack<>();

        for (int element : array) {
            // Nếu stack rỗng hoặc phần tử đang xét lớn hơn phần tử trên đỉnh của stack, đưa phần tử đó vào stack
            if (stack.isEmpty() || element > stack.peek()) {
                stack.push(element);
            }
        }

        // Phần tử lớn nhất nằm trên đỉnh của stack
        return stack.peek();
    }
}

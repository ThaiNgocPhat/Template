import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Collections;

public class Exercise1 {
    public static void main(String[] args) {
        List<Integer> list1 = new ArrayList<>();
        Random random = new Random();
        for(int i = 0; i < 10; i++){
            list1.add(random.nextInt(100));
        }
        System.out.println("List ngẫu nhiên: " + list1);

        int maxElement = Collections.max(list1);
        System.out.println("Giá trị lớn nhất trong list là: " + maxElement);

        Collections.reverse(list1);
        System.out.println("List sau khi đảo ngược: " +list1);

        Collections.sort(list1);
        System.out.println("List sau khi sắp xếp: " + list1);

        List<Integer> list2 = new ArrayList<>();
        for(int i = 0; i < 10; i++){
            list2.add(random.nextInt(100));
        }
        System.out.println("List ngẫu nhiên 2: " + list2);

        list1.addAll(list2);
        System.out.println("List sau khi thêm list1 và list2: " + list2);

        
    }
}

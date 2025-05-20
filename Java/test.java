package Java;
public class test{
    public static void main(String[] args) {
        int [] arr={1,2,3};
        int [] arr2=arr;
        arr2[1]=25;
        System.out.println(arr[1]);
    }
}


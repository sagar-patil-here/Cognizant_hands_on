public class SingletonImp {

    private static SingletonImp instance;

    private SingletonImp() {
        System.out.println("Object Created");
    }

    public static SingletonImp getInstance() {
        if(instance == null) {
            instance = new SingletonImp();
        }
        return instance;
    }
     public static void main(String[] args) {

        SingletonImp obj1 = SingletonImp.getInstance();
        SingletonImp obj2 = SingletonImp.getInstance();

        System.out.println(obj1 == obj2);
    }
}
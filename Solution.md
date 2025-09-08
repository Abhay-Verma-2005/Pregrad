# Java Data Structures & Algorithms Solutions

## 1. Binary Tree Vertical Order Traversal

```java
import java.util.*;

class Node {
    int data;
    Node left, right;

    Node(int data) {
        this.data = data;
    }
}

public class Main {

    static class Pair {
        Node node;
        int hd;

        Pair(Node node, int hd) {
            this.node = node;
            this.hd = hd;
        }
    }

    public static Node buildTree(int[] arr) {
        if (arr.length == 0 || arr[0] == -1) return null;

        Node root = new Node(arr[0]);
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        int i = 1;

        while (i < arr.length) {
            Node current = queue.poll();

            if (arr[i] != -1) {
                current.left = new Node(arr[i]);
                queue.add(current.left);
            }
            i++;

            if (i < arr.length && arr[i] != -1) {
                current.right = new Node(arr[i]);
                queue.add(current.right);
            }
            i++;
        }

        return root;
    }

    // Perform vertical order traversal
    public static void verticalOrderTraversal(Node root) {
        if (root == null) return;

        TreeMap<Integer, List<Integer>> map = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair p = queue.poll();
            Node node = p.node;
            int hd = p.hd;

            map.putIfAbsent(hd, new ArrayList<>());
            map.get(hd).add(node.data);

            if (node.left != null)
                queue.add(new Pair(node.left, hd - 1));

            if (node.right != null)
                queue.add(new Pair(node.right, hd + 1));
        }

        // Print the vertical order
        for (List<Integer> list : map.values()) {
            for (int val : list) {
                System.out.print(val + " ");
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();
        int totalNodes = (1 << N) - 1;  // 2^N - 1 nodes
        int[] arr = new int[totalNodes];

        for (int i = 0; i < totalNodes; i++) {
            arr[i] = sc.nextInt();
        }

        Node root = buildTree(arr);

        verticalOrderTraversal(root);
    }
}
```

## 2. Array Intersection

```java
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] arr1 = new int[n];
        int[] arr2 = new int[n];

        for (int i = 0; i < n; i++) {
            arr1[i] = sc.nextInt();
        }

        for (int i = 0; i < n; i++) {
            arr2[i] = sc.nextInt();
        }

        ArrayList<Integer> ansList = Intersection(arr1, arr2);
        Collections.sort(ansList);

        System.out.print(ansList);
    }

    public static ArrayList<Integer> Intersection(int[] arr1, int[] arr2) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int num : arr1) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        ArrayList<Integer> list = new ArrayList<>();
        for (int num : arr2) {
            if (map.containsKey(num) && map.get(num) > 0) {
                list.add(num);
                map.put(num, map.get(num) - 1);
            }
        }

        return list;
    }
}
```

## 3. Set Membership Query

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt(); 

        while (t-- > 0) {
            int l = sc.nextInt();  
            HashSet<Integer> set = new HashSet<>();

            for (int i = 0; i < l; i++) {
                set.add(sc.nextInt());
            }

            int q = sc.nextInt();  

            for (int i = 0; i < q; i++) {
                int n = sc.nextInt();
                if (set.contains(n)) {
                    System.out.println("Yes");
                } else {
                    System.out.println("No");
                }
            }
        }
    }
}
```

## 4. Array Arrangement with K Swaps

```java
import java.util.*;

public class Main{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        long k = sc.nextLong();  
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        HashMap<Integer, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < n; i++) {
            indexMap.put(arr[i], i);
        }

        for (int i = 0; i < n && k > 0; i++) {
            int target = n - i;  
            if (arr[i] == target) continue;

            int targetIdx = indexMap.get(target);

            indexMap.put(arr[i], targetIdx);
            indexMap.put(target, i);

            int temp = arr[i];
            arr[i] = arr[targetIdx];
            arr[targetIdx] = temp;

            k--; 
        }

        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

## 5. Most Frequent Element

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();  
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        HashMap<Integer, Integer> freqMap = new HashMap<>();
        int maxFreq = 0;
        int maxNum = arr[0];

        for (int num : arr) {
            int count = freqMap.getOrDefault(num, 0) + 1;
            freqMap.put(num, count);

            if (count > maxFreq) {
                maxFreq = count;
                maxNum = num;
            }
        }

        System.out.println(maxNum);
    }
}
```

## 6. Count Subarrays with Unique Elements

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        System.out.println(solve(arr));
        
        sc.close();
    }
    
    public static long solve(int[] arr) {
        int n = arr.length;
        long totalSum = 0;
        long mod = 1_000_000_007;
        
        HashSet<Integer> set = new HashSet<>();
        
        int right = 0;
        for (int left = 0; left < n; left++) {
            while (right < n && !set.contains(arr[right])) {
                set.add(arr[right]);
                right++;
            }
            
            long len = right - left;
            totalSum = (totalSum + (len * (len + 1)) / 2) % mod;
            
            set.remove(arr[left]);
        }
        
        return totalSum;
    }
}
```

## 7. Merge K Sorted Arrays

```java
import java.util.*;

public class Main {
    
    static class Pair implements Comparable<Pair> {
        long val;    
        int arrIdx;  
        int eleIdx;   

        Pair(long val, int arrIdx, int eleIdx){
            this.val = val;
            this.arrIdx = arrIdx;
            this.eleIdx = eleIdx;
        }

        public int compareTo(Pair other){
            return Long.compare(this.val, other.val);
        }
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int K = sc.nextInt();
        int N = sc.nextInt();

        long[][] arrays = new long[K][N];
        for(int i=0; i<K; i++){
            for(int j=0; j<N; j++){
                arrays[i][j] = sc.nextLong();
            }
        }

        PriorityQueue<Pair> pq = new PriorityQueue<>();

        for(int i=0; i<K; i++){
            pq.add(new Pair(arrays[i][0], i, 0));
        }

        List<Long> result = new ArrayList<>();

        while(!pq.isEmpty()){
            Pair curr = pq.poll();
            result.add(curr.val);

            if(curr.eleIdx + 1 < N){
                pq.add(new Pair(arrays[curr.arrIdx][curr.eleIdx + 1], curr.arrIdx, curr.eleIdx + 1));
            }
        }

        for(long num : result){
            System.out.print(num + " ");
        }
    }
}
```

## 8. Binary Tree Top View

```java
import java.util.*;

class Node {
    int data;
    Node left, right;
    Node(int data) { this.data = data; }
}

class Pair {
    Node node;
    int hd; // horizontal distance
    Pair(Node node, int hd) {
        this.node = node;
        this.hd = hd;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read level order input
        List<Integer> list = new ArrayList<>();
        while (sc.hasNextInt()) {
            list.add(sc.nextInt());
        }

        if (list.isEmpty() || list.get(0) == -1) {
            System.out.println();
            return;
        }

        // Build tree from level order
        Node root = new Node(list.get(0));
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        int i = 1;
        while (!queue.isEmpty() && i < list.size()) {
            Node current = queue.poll();

            // Left child
            if (i < list.size() && list.get(i) != -1) {
                current.left = new Node(list.get(i));
                queue.add(current.left);
            }
            i++;

            // Right child
            if (i < list.size() && list.get(i) != -1) {
                current.right = new Node(list.get(i));
                queue.add(current.right);
            }
            i++;
        }

        printTopView(root);
    }

    public static void printTopView(Node root) {
        if (root == null) return;

        // TreeMap to store first node at each horizontal distance (sorted order)
        Map<Integer, Integer> topViewMap = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair pair = queue.poll();
            Node node = pair.node;
            int hd = pair.hd;

            // Only add the first node encountered at this horizontal distance
            topViewMap.putIfAbsent(hd, node.data);

            if (node.left != null) queue.add(new Pair(node.left, hd - 1));
            if (node.right != null) queue.add(new Pair(node.right, hd + 1));
        }

        // Print top view from leftmost to rightmost
        for (int val : topViewMap.values()) {
            System.out.print(val + " ");
        }
    }
}
```

## 9. Binary Tree Bottom View

```java
import java.util.*;

class Node {
    int data;
    Node left, right;
    Node(int data) { this.data = data; }
}

class Pair {
    Node node;
    int hd; // horizontal distance
    Pair(Node node, int hd) {
        this.node = node;
        this.hd = hd;
    }
}

public class Main{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Read level order input
        List<Integer> list = new ArrayList<>();
        while (sc.hasNextInt()) {
            list.add(sc.nextInt());
        }

        if (list.isEmpty() || list.get(0) == -1) {
            System.out.println();
            return;
        }

        // Build tree from level order
        Node root = new Node(list.get(0));
        Queue<Node> queue = new LinkedList<>();
        queue.add(root);

        int i = 1;
        while (!queue.isEmpty() && i < list.size()) {
            Node current = queue.poll();

            // Left child
            if (i < list.size() && list.get(i) != -1) {
                current.left = new Node(list.get(i));
                queue.add(current.left);
            }
            i++;

            // Right child
            if (i < list.size() && list.get(i) != -1) {
                current.right = new Node(list.get(i));
                queue.add(current.right);
            }
            i++;
        }

        printBottomView(root);
    }

    public static void printBottomView(Node root) {
        if (root == null) return;

        // TreeMap to store the last node at each horizontal distance
        Map<Integer, Integer> bottomViewMap = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair pair = queue.poll();
            Node node = pair.node;
            int hd = pair.hd;

            // Always update the map with the current node
            bottomViewMap.put(hd, node.data);

            if (node.left != null) queue.add(new Pair(node.left, hd - 1));
            if (node.right != null) queue.add(new Pair(node.right, hd + 1));
        }

        // Print bottom view from leftmost to rightmost
        for (int val : bottomViewMap.values()) {
            System.out.print(val + " ");
        }
    }
}
```

## 10. Kth Largest Element

```java
import java.util.*;

public class Main{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();  // Size of array
        int k = sc.nextInt();  // k
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println(findKthLargest(arr, k));
    }

    public static int findKthLargest(int[] arr, int k) {
        // Min-heap of size k
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int num : arr) {
            minHeap.add(num);
            if (minHeap.size() > k) {
                minHeap.poll(); // remove smallest in heap
            }
        }

        return minHeap.peek(); // kth largest element
    }
}
```

## 11. Employee Salary Sorting

```java
import java.util.*;

class Employee {
    String name;
    int salary;

    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int x = sc.nextInt();      // minimum salary
        int n = sc.nextInt();      // number of employees
        sc.nextLine();             // consume remaining line

        List<Employee> employees = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            String[] parts = sc.nextLine().split(" ");
            String name = parts[0];
            int salary = Integer.parseInt(parts[1]);
            if (salary >= x) {
                employees.add(new Employee(name, salary));
            }
        }

        // Sort by salary descending, then by name lexicographically
        employees.sort((e1, e2) -> {
            if (e2.salary != e1.salary) {
                return e2.salary - e1.salary; // descending salary
            } else {
                return e1.name.compareTo(e2.name); // lexicographical order
            }
        });

        // Print result
        for (Employee e : employees) {
            System.out.println(e.name + " " + e.salary);
        }
    }
}
```

## 12. K Nearest Points to Origin

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int Q = sc.nextInt();
        int K = sc.nextInt();

        PriorityQueue<Long> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        for (int i = 0; i < Q; i++) {
            int type = sc.nextInt();
            if (type == 1) {
                long x = sc.nextLong();
                long y = sc.nextLong();
                long dist = x*x + y*y;

                if (maxHeap.size() < K) {
                    maxHeap.add(dist);
                } else if (dist < maxHeap.peek()) {
                    maxHeap.poll();
                    maxHeap.add(dist);
                }

            } else if (type == 2) {
                // print Kth nearest
                System.out.println(maxHeap.peek());
            }
        }
    }
}
```

## 13. Top K Frequent Elements (Dynamic)

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int k = sc.nextInt();
            int[] arr = new int[n];

            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            Map<Integer, Integer> freqMap = new HashMap<>();
            List<Integer> output = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                freqMap.put(arr[i], freqMap.getOrDefault(arr[i], 0) + 1);

                // Create a list of numbers sorted by frequency and value
                List<Integer> nums = new ArrayList<>(freqMap.keySet());
                nums.sort((a, b) -> {
                    int freqCompare = freqMap.get(b) - freqMap.get(a); // descending frequency
                    if (freqCompare == 0) return a - b; // ascending number if tie
                    return freqCompare;
                });

                // Take top k or all distinct numbers
                int limit = Math.min(k, nums.size());
                for (int j = 0; j < limit; j++) {
                    output.add(nums.get(j));
                }
            }

            // Print output
            for (int num : output) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
}
```

## 14. String Sorting with Prefix Priority

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine(); 
        String[] arr = new String[n];
        for (int i=0; i<n; i++) {
            arr[i]=sc.nextLine();
        }
        Arrays.sort(arr,new Comparator<String>() {
            public int compare(String s1, String s2) {
                if (s1.startsWith(s2) || s2.startsWith(s1)) {
                    return s2.length()-s1.length();
                }
                return s1.compareTo(s2);
            }
            
        });

        for (String s :arr) {
            System.out.println(s);
        }
    }
}
```

## 15. Running Median

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while (t-- > 0) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }

            // Max-heap for left half
            PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
            // Min-heap for right half
            PriorityQueue<Integer> minHeap = new PriorityQueue<>();

            for (int i = 0; i < n; i++) {
                int num = arr[i];

                if (maxHeap.isEmpty() || num <= maxHeap.peek()) {
                    maxHeap.add(num);
                } else {
                    minHeap.add(num);
                }

                // Balance heaps
                if (maxHeap.size() > minHeap.size() + 1) {
                    minHeap.add(maxHeap.poll());
                } else if (minHeap.size() > maxHeap.size()) {
                    maxHeap.add(minHeap.poll());
                }

                // Compute median
                int median;
                if (maxHeap.size() == minHeap.size()) {
                    median = (maxHeap.peek() + minHeap.peek()) / 2;
                } else {
                    median = maxHeap.peek();
                }

                System.out.print(median + " ");
            }
            System.out.println();
        }
    }
}
```

## 16. Number to Letter Decode

```java
import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String num = sc.nextLine();

        List<String> result = new ArrayList<>();
        decode(num, "", result);

        Collections.sort(result); // sort lexicographically
        for (String s : result) {
            System.out.println(s);
        }
    }

    // Recursive function to decode
    private static void decode(String num, String current, List<String> result) {
        if (num.isEmpty()) {
            result.add(current);
            return;
        }

        // Take 1 digit
        int oneDigit = Integer.parseInt(num.substring(0, 1));
        if (oneDigit >= 1 && oneDigit <= 9) {
            decode(num.substring(1), current + (char) ('A' + oneDigit - 1), result);
        }

        // Take 2 digits
        if (num.length() >= 2) {
            int twoDigits = Integer.parseInt(num.substring(0, 2));
            if (twoDigits >= 10 && twoDigits <= 26) {
                decode(num.substring(2), current + (char) ('A' + twoDigits - 1), result);
            }
        }
    }
}
```

## 17. Merge K Sorted Arrays

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int K = sc.nextInt();
        int N = sc.nextInt();
        int total = K * N;

        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < total; i++) {
            list.add(sc.nextInt());
        }

        Collections.sort(list); // sort all numbers

        for (int num : list) {
            System.out.print(num + " ");
        }
    }
}
```

## 18. Top K Frequent Elements (Bucket Sort)

```java
import java.util.*;

public class Main {

    @SuppressWarnings("unchecked")
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        List<Integer>[] buckets = new List[nums.length + 1];
        for (int i = 0; i < buckets.length; i++) {
            buckets[i] = new ArrayList<>();
        }

        for (int num : frequencyMap.keySet()) {
            int frequency = frequencyMap.get(num);
            buckets[frequency].add(num);
        }

        List<Integer> resultElements = new ArrayList<>();
        for (int i = buckets.length - 1; i >= 0 && resultElements.size() < k; i--) {
            if (!buckets[i].isEmpty()) {
                for (Integer num : buckets[i]) {
                    if (resultElements.size() < k) {
                        resultElements.add(num);
                    } else {
                        break;
                    }
                }
            }
        }
        
        Collections.sort(resultElements);

        return resultElements;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int n = scanner.nextInt();
        int k = scanner.nextInt();
        
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) {
            nums[i] = scanner.nextInt();
        }

        List<Integer> result = topKFrequent(nums, k);

        for (int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i) + (i == result.size() - 1 ? "" : " "));
        }
        System.out.println();
    }
}
```
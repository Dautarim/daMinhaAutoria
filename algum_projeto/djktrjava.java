import java.util.*;

class Dijkstra {
    static class Node implements Comparable<Node> {
        int vertex, weight;

        public Node(int vertex, int weight) {
            this.vertex = vertex;
            this.weight = weight;
        }

        @Override
        public int compareTo(Node other) {
            return Integer.compare(this.weight, other.weight);
        }
    }

    public static Map<Integer, Integer> dijkstra(Map<Integer, List<Node>> graph, int start) {
        Map<Integer, Integer> distances = new HashMap<>();
        for (int vertex : graph.keySet()) {
            distances.put(vertex, Integer.MAX_VALUE);
        }
        distances.put(start, 0);

        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.add(new Node(start, 0));

        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int currentVertex = current.vertex;
            int currentDistance = current.weight;

            if (currentDistance > distances.get(currentVertex)) continue;

            for (Node neighbor : graph.get(currentVertex)) {
                int distance = currentDistance + neighbor.weight;

                if (distance < distances.get(neighbor.vertex)) {
                    distances.put(neighbor.vertex, distance);
                    pq.add(new Node(neighbor.vertex, distance));
                }
            }
        }

        return distances;
    }

    public static void main(String[] args) {
        Map<Integer, List<Node>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(new Node(1, 4), new Node(2, 1)));
        graph.put(1, Arrays.asList(new Node(3, 1)));
        graph.put(2, Arrays.asList(new Node(1, 2), new Node(3, 5)));
        graph.put(3, Collections.emptyList());

        int start = 0;
        Map<Integer, Integer> distances = dijkstra(graph, start);

        for (Map.Entry<Integer, Integer> distance : distances.entrySet()) {
            System.out.println("Distance from " + start + " to " + distance.getKey() + " is " + distance.getValue());
        }
    }
}

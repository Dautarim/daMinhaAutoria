
function dijkstra(graph, start) {
    let distances = {};
    let pq = new MinPriorityQueue();
    for (let vertex in graph) 
        { distances[vertex] = Infinity; }

    distances[start] = 0;
    pq.enqueue(start, 0);

    while (!pq.isEmpty()) {
        let { element: currentVertex, 
        priority: currentDistance } = pq.dequeue();
        if (currentDistance > distances[currentVertex]) continue;
        for (let neighbor in graph[currentVertex]) {
        let distance = currentDistance + graph[currentVertex][neighbor];
        if (distance < distances[neighbor]) {
            distances[neighbor] = distance;
            pq.enqueue(neighbor, distance); } } }
    return distances; }

// Exemplo de uso:
const graph = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'C': 2, 'D': 5 },
    'C': { 'A': 4, 'B': 2, 'D': 1 },
    'D': { 'B': 5, 'C': 1 } };

const distances = dijkstra(graph, 'A');
console.log(distances);

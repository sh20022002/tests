// Function to calculate the Euclidean distance between two points
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}

// Function to find the closest pair using divide and conquer
function closestPair(points) {
    // Base case: if there are less than 2 points, return Infinity
    if (points.length < 2) {
        return Infinity;
    }

    // Sort points by x-coordinate
    points.sort((a, b) => a[0] - b[0]);

    // Recursive function to find closest pair
    function closestPairRec(left, right) {
        if (left === right) {
            return Infinity;
        }
        const mid = Math.floor((left + right) / 2);
        const minLeft = closestPairRec(left, mid);
        const minRight = closestPairRec(mid + 1, right);
        let minDistance = Math.min(minLeft, minRight);
        const strip = [];
        for (let i = left; i <= right; i++) {
            if (Math.abs(points[i][0] - points[mid][0]) < minDistance) {
                strip.push(points[i]);
            }
        }
        strip.sort((a, b) => a[1] - b[1]);
        for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < Math.min(i + 7, strip.length); j++) {
                minDistance = Math.min(minDistance, distance(strip[i], strip[j]));
            }
        }
        return minDistance;
    }

    // Call the recursive function
    return closestPairRec(0, points.length - 1);
}

// Example usage:
const points = [[1, 2], [4, 6], [7, 8], [9, 5], [3, 1], [2, 9]];
console.log("Closest pair distance:", closestPair(points));

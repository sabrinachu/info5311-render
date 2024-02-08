
// code for figuring out what the most common tree types were 
let treeCounts = {};

trees.forEach(row => {
    console.log(row);
    row.Species = row.qSpecies.split('::')[1].trim();
    let treeType = row.Species; // Adjust based on your actual column name
    if (treeCounts[treeType]) {
        treeCounts[treeType]++;
    } else {
        treeCounts[treeType] = 1;
    }
});

let sortedTrees = Object.entries(treeCounts).sort((a, b) => b[1] - a[1]);

// Log the most common tree types
console.log("Most common tree types:", sortedTrees.slice(0, 10)); // Adjust the number as needed
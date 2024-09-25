const getTotalIsles = function (grid) {


  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array(rows).fill().map(() => Array(cols).fill(false));

  let count = 0;

  const dfs = function (r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || grid[r][c] === 'W') {
      return;
    }
    visited[r][c] = true;
    // directions
    dfs(r - 1, c); // up
    dfs(r + 1, c); // down
    dfs(r, c - 1); // left
    dfs(r, c + 1); // right
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L' && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }

  }

};

module.exports = getTotalIsles;
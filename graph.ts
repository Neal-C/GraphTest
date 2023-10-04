// Every integers are positive.

//  A graph is a (N x N) matrix, with N ∈ [0, +∞]. Each case holds a certain amount of grains of rice.
// Visual example:
// | 1 | 4 | 2 |
// | 5 | 1 | 3 |
// | 1 | 2 | 7 |
// Coding Example: new Graph(3, [[1,4,2],[5,1,3],[1,2,7]])

// Rules: You can only go through the Graph by moving to the right or down, and you must finish the travel in the bottom right.

// Goal: Obtain the maximum grains of rice you can get from the graph in one travel.
// Example: for the visual example above, the result will be 17

export class Graph {
	public size: number;
	public cases: Array<Array<number>>;
	public maxRun: number;

	// example : new Grap(3, [[1,4,2],[5,1,3], [1,2,7]])
	constructor(size: number, cases: Array<Array<number>>) {
		const allNumbers = cases.flat();
		const hasNegativesNumbers = allNumbers.some((n) => n < 0);
		if (hasNegativesNumbers) {
			throw new Error("negative numbers make me sad. Please don't.");
		}

		this.size = size;
		this.cases = cases;
		this.maxRun = 0;
	}

	public getMaxRun() {
		return this.maxRun;
	}

	public computeMaxRun(): number {
		return 0;
	}

	public setMaxRun() {
		this.maxRun = this.computeMaxRun();
	}
}

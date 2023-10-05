import { it, expect, describe } from "vitest";
import { Graph } from "./graph";

describe("graph", () => {
	describe("basic initialization", () => {
		it("should pass basic initiliazing", () => {
			const graph = new Graph(0, [[]]);
			graph.setMaxRun();
			expect(graph.maxRun).toEqual(0);
		});
		it("should pass another basic initialization", () => {
			const graph = new Graph(1, [[2]]);
			graph.setMaxRun();
			expect(graph.maxRun).toEqual(2);
		});
	});

	describe("more cases", () => {
		it.each([
			{
				size: 2,
				cases: [
					[2, 5],
					[4, 2],
				],
				expected: 9,
			},
			{
				size: 3,
				cases: [
					[4, 10, 0],
					[9, 0, 1],
					[5, 0, 3],
				],
				expected: 21,
			},
			{
				size: 4,
				cases: [
					[4, 3, 4, 5],
					[2, 1, 1, 2],
					[5, 3, 1, 3],
					[1, 1, 2, 1],
				],
				expected: 22,
			},
			{
				size: 5,
				cases: [],
				expected: 28,
			},
			{
				size: 6,
				cases: [],
				expected: 48,
			},
		])("new Graph($size, $cases) -> $expected", ({ size, cases, expected }) => {
			const graph = new Graph(size, cases);
			graph.computeMaxRun();
			const maxRun = graph.getMaxRun();
			expect(maxRun).toEqual(expected);
		});
	});
});

import { it, expect, describe } from "vitest";
import { Graph } from "./graph";

describe("graph", () => {
	it("should be a blank test for now", () => {});
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
});

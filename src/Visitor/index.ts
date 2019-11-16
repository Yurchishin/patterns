import {Place, House, Bank} from "./Place";
import {Visitor, InsuranceVisitor} from "./Visitor"

function clientCode(components: Place[], visitor: Visitor) {
	for (const component of components) {
		component.accept(visitor);
	}
}

const components = [
	new House(),
	new Bank(),
	new House(),
];

const visitor = new InsuranceVisitor();
clientCode(components, visitor);

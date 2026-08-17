interface Bookable {
	book(className: string): void;
}

class FitnessMember implements Bookable {
	constructor(
		public memberName: string,
		private bookings: string[] = []
	) {}

	book(className: string): void {
		this.bookings.push(className);
	}

	getBookingCount(): number {
		return this.bookings.length;
	}

	getMembershipSummary(): string {
		return `${this.memberName} is booked into ${this.getBookingCount()} class(es).`;
	}
}

const myMember = new FitnessMember("Alex");

myMember.book("Yoga Flow");
myMember.book("Spin Class");
myMember.book("Pilates");

console.log(myMember.getMembershipSummary());

// console.log(myMember.bookings); // This would not compile because bookings is private.


interface ParsedCheckIn {
	memberId: number;
	timestamp: string;
}

function parseCheckIn(json: string): ParsedCheckIn {
	return JSON.parse(json) as ParsedCheckIn;
}

console.log(parseCheckIn('{"memberId": 12, "timestamp": "2026-07-28T07:15:00"}'));


type Instructor = {
	id: number;
	name: string;
};

const roster: Instructor[] = [
	{ id: 1, name: "Jordan" },
	{ id: 2, name: "Taylor" }
];

function getInstructorName(id: number): string {
	const instructor = roster.find(i => i.id === id)!;
	return instructor.name;
}

console.log(getInstructorName(1));


enum MembershipTier {
	Bronze,
	Silver,
	Gold
}

interface MembershipPlan {
	id: number;
	name: string;
	tier: MembershipTier;
	monthlyPrice: number;
	perks: string;
}

type PlanPreview = Pick<MembershipPlan, "id" | "name">;

const planPreview: PlanPreview = {
	id: 1,
	name: "Gold Plan"
};

console.log(planPreview);


type PlanUpdate = Partial<MembershipPlan>;

function applyPlanUpdate(
	plan: MembershipPlan,
	update: PlanUpdate
): MembershipPlan {
	return { ...plan, ...update };
}

const membershipPlan: MembershipPlan = {
	id: 1,
	name: "Gold Plan",
	tier: MembershipTier.Gold,
	monthlyPrice: 50,
	perks: "Unlimited classes"
};

const planUpdate: PlanUpdate = {
	monthlyPrice: 45
};

console.log(applyPlanUpdate(membershipPlan, planUpdate));
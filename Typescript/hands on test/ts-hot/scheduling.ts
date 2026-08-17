interface FitnessClass {
	id: number;
	name: string;
	readonly instructor: string;
	capacity: number;
	durationMinutes?: number;
}

const weeklySchedule: FitnessClass[] = [
	{
		id: 1,
		name: "Yoga Flow",
		instructor: "Jordan",
		capacity: 20,
		durationMinutes: 45
	},
	{
		id: 2,
		name: "Spin Class",
		instructor: "Taylor",
		capacity: 15,
		durationMinutes: 60
	}
];

type ClassFormatter = (fitnessClass: FitnessClass) => string;

function formatClassList(classes: FitnessClass[], fn: ClassFormatter): string[] {
	return classes.map(fn);
}

const formatter: ClassFormatter = (fitnessClass) => {
	const duration = fitnessClass.durationMinutes ?? 60;
	return `${fitnessClass.name} with ${fitnessClass.instructor} (${duration} min)`;
};

console.log(formatClassList(weeklySchedule, formatter));

function signUpMember(
	memberName: string,
	className: string,
	waitlistOk?: boolean
): string {
	const waitlist = waitlistOk ?? false;

	if (waitlist) {
		return `${memberName} is signed up for ${className} (waitlist OK).`;
	}

	return `${memberName} is signed up for ${className}.`;
}

console.log(signUpMember("Dylan", "Yoga Flow"));
console.log(signUpMember("Alex", "Spin Class", true));
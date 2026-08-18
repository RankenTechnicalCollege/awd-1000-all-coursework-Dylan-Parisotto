type Program =
	| "Web Development"
	| "Cybersecurity"
	| "Data Science"
	| "UX Design"
	| "Game Development"
	| "Cloud Computing";

type ClassYear = "Freshman" | "Sophomore" | "Junior" | "Senior";

interface Student {
	id: number;
	firstName: string;
	lastName: string;
	program: Program;
	year: ClassYear;
	email: string;
	bio: string;
	skills: string[];
	gpa?: number;
	photoUrl?: string;
}

const PROGRAM_OPTIONS: Program[] = [
	"Web Development",
	"Cybersecurity",
	"Data Science",
	"UX Design",
	"Game Development",
	"Cloud Computing"
];

const CLASS_YEAR_OPTIONS: ClassYear[] = ["Freshman", "Sophomore", "Junior", "Senior"];

const STORAGE_KEY = "student-directory-data";

const seedStudents: Student[] = [
	{
		id: 1,
		firstName: "Olivia",
		lastName: "Chen",
		program: "Web Development",
		year: "Junior",
		email: "olivia.chen@campus.edu",
		bio: "Front-end focused developer who loves accessibility and clean layouts.",
		skills: ["TypeScript", "HTML", "CSS", "Tailwind"],
		gpa: 3.8,
		photoUrl: "assets/photos/student1.jpg"
	},
	{
		id: 2,
		firstName: "Ava",
		lastName: "Brooks",
		program: "Cybersecurity",
		year: "Senior",
		email: "ava.brooks@campus.edu",
		bio: "Interested in penetration testing and secure app architecture.",
		skills: ["Linux", "Python", "Wireshark"],
		gpa: 3.6,
		photoUrl: "assets/photos/student2.jpg"
	},
	{
		id: 3,
		firstName: "Daniel",
		lastName: "Singh",
		program: "Data Science",
		year: "Sophomore",
		email: "daniel.singh@campus.edu",
		bio: "Builds data stories with predictive models and dashboards.",
		skills: ["Python", "Pandas", "SQL", "Visualization"],
		photoUrl: "assets/photos/student3.jpg"
	},
	{
		id: 4,
		firstName: "Sophia",
		lastName: "Garcia",
		program: "UX Design",
		year: "Senior",
		email: "sophia.garcia@campus.edu",
		bio: "Designs inclusive interfaces through research and rapid prototyping.",
		skills: ["Figma", "User Research", "Prototyping"],
		gpa: 3.9,
		photoUrl: "assets/photos/student4.jpg"
	},
	{
		id: 5,
		firstName: "Chloe",
		lastName: "Kim",
		program: "Game Development",
		year: "Freshman",
		email: "chloe.kim@campus.edu",
		bio: "Exploring interactive storytelling and level design fundamentals.",
		skills: ["C#", "Unity", "Level Design"],
		photoUrl: "assets/photos/student5.jpg"
	},
	{
		id: 6,
		firstName: "Emma",
		lastName: "Diaz",
		program: "Cloud Computing",
		year: "Junior",
		email: "emma.diaz@campus.edu",
		bio: "Deploys and monitors scalable cloud workloads.",
		skills: ["AWS", "Docker", "CI/CD"],
		gpa: 3.5,
		photoUrl: "assets/photos/student6.jpg"
	},
	{
		id: 7,
		firstName: "Isabella",
		lastName: "Patel",
		program: "Web Development",
		year: "Senior",
		email: "isabella.patel@campus.edu",
		bio: "Enjoys building full-stack experiences with strong UI polish.",
		skills: ["JavaScript", "Node", "REST APIs"],
		gpa: 3.7,
		photoUrl: "assets/photos/student7.jpg"
	},
	{
		id: 8,
		firstName: "Natalie",
		lastName: "Evans",
		program: "Cybersecurity",
		year: "Sophomore",
		email: "natalie.evans@campus.edu",
		bio: "Focused on digital forensics and incident response workflows.",
		skills: ["Forensics", "Networking", "Risk Analysis"],
		photoUrl: "assets/photos/student8.jpg"
	},
	{
		id: 9,
		firstName: "Marcus",
		lastName: "Mendez",
		program: "Data Science",
		year: "Junior",
		email: "marcus.mendez@campus.edu",
		bio: "Applies machine learning to practical business questions.",
		skills: ["Machine Learning", "R", "Statistics"],
		gpa: 3.4,
		photoUrl: "assets/photos/student9.jpg"
	},
	{
		id: 10,
		firstName: "Grace",
		lastName: "Wright",
		program: "UX Design",
		year: "Freshman",
		email: "grace.wright@campus.edu",
		bio: "Curious about interaction design and motion in interfaces.",
		skills: ["Sketching", "Interaction Design", "Usability Testing"],
		photoUrl: "assets/photos/student10.jpg"
	}
];

class StudentRepository {
	private students: Student[];

	constructor(initialStudents: Student[]) {
		this.students = [...initialStudents];
	}

	addStudent(student: Student): void {
		this.students.push(student);
	}

	removeStudent(id: number): boolean {
		const index = this.students.findIndex((student) => student.id === id);
		if (index === -1) {
			return false;
		}
		this.students.splice(index, 1);
		return true;
	}

	getAllStudents(): Student[] {
		return [...this.students];
	}

	findStudents(predicate: (student: Student) => boolean): Student[] {
		return this.students.filter(predicate);
	}
}

function saveStudentsToStorage(students: Student[]): void {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

function loadStudentsFromStorage(fallbackStudents: Student[]): Student[] {
	const raw = localStorage.getItem(STORAGE_KEY);
	if (raw === null) {
		return [...fallbackStudents];
	}

	try {
		const parsed = JSON.parse(raw) as unknown;
		if (!Array.isArray(parsed)) {
			return [...fallbackStudents];
		}

		const normalized = parsed
			.map((entry) => normalizeStudent(entry))
			.map((student) => (student === null ? null : normalizeDefaultStudentName(student)))
			.filter((entry): entry is Student => entry !== null);

		return normalized.length > 0 ? normalized : [...fallbackStudents];
	} catch {
		return [...fallbackStudents];
	}
}

function normalizeDefaultStudentName(student: Student): Student {
	const defaultStudent = seedStudents.find((entry) => entry.id === student.id);
	if (defaultStudent === undefined) {
		return student;
	}

	return {
		...student,
		firstName: defaultStudent.firstName,
		lastName: defaultStudent.lastName,
		email: defaultStudent.email
	};
}

function normalizeStudent(raw: unknown): Student | null {
	if (typeof raw !== "object" || raw === null) {
		return null;
	}

	const maybeStudent = raw as Partial<Student>;

	if (
		typeof maybeStudent.id !== "number" ||
		typeof maybeStudent.firstName !== "string" ||
		typeof maybeStudent.lastName !== "string" ||
		typeof maybeStudent.email !== "string" ||
		typeof maybeStudent.bio !== "string" ||
		!Array.isArray(maybeStudent.skills) ||
		!isProgram(maybeStudent.program) ||
		!isClassYear(maybeStudent.year)
	) {
		return null;
	}

	return {
		id: maybeStudent.id,
		firstName: maybeStudent.firstName,
		lastName: maybeStudent.lastName,
		email: maybeStudent.email,
		bio: maybeStudent.bio,
		skills: maybeStudent.skills.filter((skill): skill is string => typeof skill === "string"),
		program: maybeStudent.program,
		year: maybeStudent.year,
		gpa: typeof maybeStudent.gpa === "number" ? maybeStudent.gpa : undefined,
		photoUrl: normalizePhotoUrl(maybeStudent.id, maybeStudent.photoUrl)
	};
}

function normalizePhotoUrl(id: number, photoUrl: unknown): string | undefined {
	if (typeof photoUrl === "string" && photoUrl.trim() !== "") {
		return photoUrl.replace(/^assets\/photos\/student-(\d+)\.jpg$/, "assets/photos/student$1.jpg");
	}

	return id >= 1 && id <= 10 ? `assets/photos/student${id}.jpg` : undefined;
}

function isProgram(value: unknown): value is Program {
	return typeof value === "string" && PROGRAM_OPTIONS.includes(value as Program);
}

function isClassYear(value: unknown): value is ClassYear {
	return typeof value === "string" && CLASS_YEAR_OPTIONS.includes(value as ClassYear);
}

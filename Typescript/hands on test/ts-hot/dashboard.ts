class CheckInLog {
	constructor(
		public memberName: string,
		private checkInTimes: string[] = []
	) {}

	logCheckIn(time: string): void {
		this.checkInTimes.push(time);
	}

	getCheckInCount(): number {
		return this.checkInTimes.length;
	}
}


type DeskAlert = "low-supplies" | "equipment-issue" | "all-clear";

function alertMessage(alert: DeskAlert): string {
	switch (alert) {
		case "low-supplies":
			return "Supplies are running low.";
		case "equipment-issue":
			return "There is an equipment issue.";
		case "all-clear":
			return "All clear at the front desk.";
	}
}


function mostRecent<T>(items: T[]): T | undefined {
	return items[items.length - 1];
}

const alerts: DeskAlert[] = [
	"low-supplies",
	"equipment-issue",
	"all-clear"
];

const checkInTimes: string[] = [
	"8:00 AM",
	"9:30 AM",
	"11:00 AM"
];

console.log("=== Most Recent Items ===");
console.log(mostRecent(alerts));
console.log(mostRecent(checkInTimes));


interface ShiftReport {
	id: number;
	staffName: string;
	alertsRaised: number;
	notes: string;
}

type ShiftReportSummary = Pick<ShiftReport, "id" | "staffName">;

const shiftSummary: ShiftReportSummary = {
	id: 1,
	staffName: "Alex"
};


const checkInLog = new CheckInLog("Alex");

checkInLog.logCheckIn("8:00 AM");
checkInLog.logCheckIn("9:30 AM");
checkInLog.logCheckIn("11:00 AM");


console.log("=== Check-In Log ===");
console.log(`Member: ${checkInLog.memberName}`);
console.log(`Check-ins: ${checkInLog.getCheckInCount()}`);

console.log("=== Desk Alerts ===");
console.log(alertMessage("low-supplies"));
console.log(alertMessage("equipment-issue"));

console.log("=== Shift Report ===");
console.log(shiftSummary);
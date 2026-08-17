type BookingResult = "confirmed" | "waitlisted" | "declined";

function describeBookingResult(result: BookingResult): string {
	switch (result) {
		case "confirmed":
			return "Your booking is confirmed!";
		case "waitlisted":
			return "You have been added to the waitlist.";
		case "declined":
			return "Sorry, your booking was declined.";
	}
}

console.log(describeBookingResult("confirmed"));
console.log(describeBookingResult("waitlisted"));
console.log(describeBookingResult("declined"));


type ConfirmedBooking = {
	type: "confirmed";
	className: string;
	spot: number;
};

type CancelledBooking = {
	type: "cancelled";
	className: string;
	reason: string;
};

type Booking = ConfirmedBooking | CancelledBooking;

function summarizeBooking(booking: Booking): string {
	switch (booking.type) {
		case "confirmed":
			return `${booking.className} is confirmed in spot ${booking.spot}.`;
		case "cancelled":
			return `${booking.className} was cancelled because ${booking.reason}.`;
	}
}

const confirmed: ConfirmedBooking = {
	type: "confirmed",
	className: "Yoga Flow",
	spot: 5
};

const cancelled: CancelledBooking = {
	type: "cancelled",
	className: "Spin Class",
	reason: "the instructor is unavailable"
};

console.log(summarizeBooking(confirmed));
console.log(summarizeBooking(cancelled));


function getNextAvailable<T>(items: T[], index: number): T | undefined {
	if (index < 0 || index >= items.length) {
		return undefined;
	}

	return items[index];
}

const numbers = [10, 20, 30, 40];
const classes = ["Yoga", "Spin", "Pilates"];

console.log(getNextAvailable(numbers, 1));
console.log(getNextAvailable(classes, 2));
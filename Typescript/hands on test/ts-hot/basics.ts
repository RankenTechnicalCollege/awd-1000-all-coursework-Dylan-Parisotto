const facilityName: string = "Main Facility";
const maxCapacity: number = 500;
const isOpenToday: boolean = true;

const dailyCheckIns: number[] = [120, 150, 180];

const frontDeskLocation: [number, number] = [3, 5];

function averageCheckIns(checkIns: number[]): number {
  if (checkIns.length === 0) {
    return 0;
  }

  const total = checkIns.reduce((sum, checkIn) => sum + checkIn, 0);
  return total / checkIns.length;
}

console.log(averageCheckIns(dailyCheckIns));
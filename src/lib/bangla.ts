const DIGITS = '০১২৩৪৫৬৭৮৯';

export function bnDigits(n: number | string): string {
  return String(n).replace(/[0-9]/g, (d) => DIGITS[Number(d)]);
}

// Bangladesh's revised Bangla calendar (2019): the year starts on 14 April,
// Boishakh to Ashwin have 31 days, Kartik to Magh and Choitro 30, and Falgun
// 29 (30 in a Gregorian leap year). Checks: 14 Feb = 1 Falgun, 21 Feb = 8 Falgun,
// 16 Dec = 1 Poush.
const MONTHS = ['বৈশাখ', 'জ্যৈষ্ঠ', 'আষাঢ়', 'শ্রাবণ', 'ভাদ্র', 'আশ্বিন', 'কার্তিক', 'অগ্রহায়ণ', 'পৌষ', 'মাঘ', 'ফাল্গুন', 'চৈত্র'];

function isLeap(y: number) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

export function banglaDate(date: Date): { day: number; month: string; year: number } {
  const y = date.getFullYear();
  const start = new Date(y, 3, 14);
  const gYear = date >= start ? y : y - 1;
  let days = Math.round((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(gYear, 3, 14)) / 86400000);
  const lengths = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, isLeap(gYear + 1) ? 30 : 29, 30];
  let m = 0;
  while (days >= lengths[m]) {
    days -= lengths[m];
    m += 1;
  }
  return { day: days + 1, month: MONTHS[m], year: gYear - 593 };
}

export function banglaDateString(date: Date): string {
  const b = banglaDate(date);
  return `${bnDigits(b.day)} ${b.month} ${bnDigits(b.year)}`;
}

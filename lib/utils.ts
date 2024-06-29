import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const getTimestamp = (createdAt: Date): string => {
//   const now = new Date();
//   let diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
//
//   const units = [
//     { name: 'year', seconds: 31536000 },
//     { name: 'month', seconds: 2592000 },
//     { name: 'day', seconds: 86400 },
//     { name: 'hour', seconds: 3600 },
//     { name: 'minute', seconds: 60 },
//     { name: 'second', seconds: 1 }
//   ];
//
//   let result: string[] = [];
//
//   for (const unit of units) {
//     const interval = Math.floor(diff / unit.seconds);
//     if (interval >= 1) {
//       result.push(`${interval} ${unit.name}${interval !== 1 ? 's' : ''}`);
//       diff -= interval * unit.seconds;
//     }
//   }
//
//   return result.length > 0 ? result.join(' ') + ' ago' : 'just now';
// }

// Пример использования:
// const createdAt = new Date('2023-06-17T14:30:00');
// console.log(getTimestamp(createdAt)); // Пример вывода: "5 days 2 minutes ago"



export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const units = [
    { name: 'year', seconds: 31536000 },
    { name: 'month', seconds: 2592000 },
    { name: 'day', seconds: 86400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 }
  ];

  for (const unit of units) {
    const interval = Math.floor(diff / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

// // Пример использования:
// const createdAt = new Date('2023-06-17T14:30:00');
// console.log(getTimestamp(createdAt)); // Пример вывода: "5 days ago"


export const formatNumber = (number: number): string => {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  } else if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  } else {
    return number.toString();
  }
}
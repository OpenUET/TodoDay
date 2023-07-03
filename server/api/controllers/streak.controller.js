import Streak from "../models/streak.js"
import { calcStreakNumber } from "../utils/calcStreakNumber.js"

export const getLatestStreak = async (req, res) => {
    const latest = await Streak.findOne({}, {}, { sort: { $natural: -1 } });
    return res.status(200).json(latest)
}

export const getLongestStreak = async (req, res) => {
    const allStreaks = await Streak.find({});
    console.log(allStreaks);

    let longestStreak = null;
    let longestDays = 0;
    for (const streak of allStreaks) {
        if (!longestStreak) {
            longestStreak = streak;
            longestDays = calcStreakNumber(
                new Date(streak.startDate),
                new Date(streak.endDate),
            )
            continue;
        }
        const streakDay = calcStreakNumber(
            new Date(streak.startDate),
            new Date(streak.endDate),
        )
        console.log(streakDay)
        if (streakDay > longestDays) {
            longestStreak = streak;
            longestDays = streakDay;
        }
    }

    return res.status(200).json(longestStreak)
}

export const createStreak = async (req, res) => {

    const today = new Date().toDateString();
    const newStreak = await Streak.create({
        startDate: today,
        endDate: today,
    })

    return res.status(200).json(newStreak)
}

export const updateStreakEndDate = async (req, res) => {
    // check if streak ended or not.

    const last30Days = await Day.find({
        date: {
            $gte: {
                $dateSubtract: {
                    startDate: new Date().toDateString(),
                    unit: "month",
                    amount: 1
                }
            }
        }
    })

    console.log(last30Days);
    return res.status(200).json(last30Days);
}
import React, { useState } from "react";
import Card from "../../elements/card";

const Schedule = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const formatDate = (date, options = { day: "2-digit", month: "long" }) =>
    date.toLocaleDateString("id-ID", options);

  const formattedToday = formatDate(today);

  const getMonthDates = () => {
    const daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
      return {
        fullDate: date,
        day: date.toLocaleDateString("id-ID", { weekday: "short" }),
        date: date.getDate(),
        year: today.getFullYear(),
      };
    });
  };

  const dates = getMonthDates();

  const eventsData = {
    [today.getDate()]: [
      {
        time: "09:00 AM",
        title: "Client Meeting",
        desc: "Review final design",
        color: "bg-red-400",
        icon: "📹",
      },
      {
        time: "10:00 AM",
        title: "Check List",
        desc: "Complete the tasks",
        color: "bg-blue-900",
        icon: "✅",
      },
      {
        time: "12:00 PM",
        title: "Course",
        desc: "Continue design course",
        color: "bg-yellow-400",
        icon: "📚",
      },
    ],
  };

  const events = eventsData[selectedDate] || [];

  return (
    <Card
      variant=""
      title="Jadwal Agenda"
      desc={
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-white">
            Hari Ini, {formattedToday} {today.getFullYear()}
          </h2>

          {/* Tanggal */}
          <div className="grid grid-cols-7 gap-2 mb-4 p-4 border rounded-lg bg-gray-100">
            {dates.map((d) => (
              <button
                key={d.date}
                className={`flex flex-col items-center px-2 py-1 rounded-lg text-sm transition-all duration-300 w-10 h-14 ${
                  selectedDate === d.date 
                    ? "bg-blue-500 text-white"
                    : "bg-white border hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => setSelectedDate(d.date)}
              >
                <span className="font-medium">{d.date}</span>
                <span className="text-xs text-gray-600 ">{d.day}</span>
              </button>
            ))}
          </div>

          {/* Agenda */}
          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${event.color} text-white shadow-md`}
                >
                  <div className="flex items-start">
                    <span className="text-xl mr-3">{event.icon}</span>
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm">{event.desc}</p>
                      <span className="text-xs opacity-80">{event.time}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 border rounded-lg text-center bg-white shadow-md">
                <p className="text-gray-500">
                  Tidak ada agenda untuk hari ini.
                </p>
                <p className="text-gray-700 font-medium mt-2">Cooming Soon !</p>
              </div>
            )}
          </div>
        </div>
      }
    />
  );
};

export default Schedule;

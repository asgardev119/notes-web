import React, { useEffect, useState } from "react";

const NoteList = ({ notes, onSelectNote, onDeleteNote }) => {
  const getCurrentDateTime = () => {
    const currentDate = new Date();

    return `${currentDate.toLocaleDateString()}`;
  };

  return (
    <div className="space-y-2 ">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-gray-50 p-3 rounded-md shadow-sm border border-gray-200 flex justify-between 
          items-center cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectNote(note)}
        >
          <div className="cursor-pointer">
            <h3 className="text-lg font-semibold text-gray-800">
              {note.title}
            </h3>
            <p className="text-sm text-gray-500">{getCurrentDateTime()}</p>

            {note.content.length > 25
              ? note.content.slice(0, 25) + "..."
              : note.content}
          </div>
          <button
            className=" ml-5 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 "
            onClick={(e) => {
              e.stopPropagation();
              onDeleteNote(note.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;

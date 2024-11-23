import React, { useEffect, useState } from "react";

const NoteList = ({ notes, onSelectNote, onDeleteNote }) => {


  
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
            <p className="text-gray-600 truncate">............</p>
            {/* {note.content} */}
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

import React, { useState, useEffect } from "react";

const NoteEditor = ({ note, onSaveNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note]);

  const handleSave = () => {
    if (title.trim() && content.trim()) {
      onSaveNote({ id: note?.id, title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Both title and content are required!");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {note ? "Edit Note" : "Create Note"}
      </h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 h-48"
      />
      <button
        onClick={handleSave}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteEditor;

import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";

const App = () => {
  // const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentNote, setCurrentNote] = useState(null);

  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : []; // Load existing notes or use an empty array
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSaveNote = (note) => {
    if (note.id) {
      // Update existing note
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
    } else {
      // Add new note
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
    setCurrentNote(null); // Clear editor after saving
  };

  const handleSelectNote = (note) => {
    setCurrentNote(note);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (currentNote?.id === id) setCurrentNote(null); // Clear editor if the deleted note was open
  };

  const handleNewNote = () => {
    setCurrentNote(null); // Clear editor to create a new note
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Left Sidebar */}
      <div className="lg:w-1/3 bg-white shadow-md p-4 space-y-4">
        <div className="flex items-center gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button
            onClick={handleNewNote}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            New Note
          </button>
        </div>
        <NoteList
          notes={filteredNotes}
          onSelectNote={handleSelectNote}
          onDeleteNote={handleDeleteNote}
        />
      </div>

      {/* Right Main Editor */}
      <div className="lg:w-2/3 flex-grow bg-white shadow-md p-6">
        <NoteEditor note={currentNote} onSaveNote={handleSaveNote} />
      </div>
    </div>
  );
};

export default App;

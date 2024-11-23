// import React, { useState } from "react";

// const NoteForm = ({ addNote }) => {

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (title.trim() && content.trim()) {
//       addNote({ title, content });
//       setTitle("");
//       setContent("");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white p-4 rounded shadow-md h-auto"
//     >
//       <h2 className="text-xl font-semibold mb-4">Add a Note</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-3"
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-3"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//       >
//         Add Note
//       </button>
//     </form>
//   );
// };

// export default NoteForm;

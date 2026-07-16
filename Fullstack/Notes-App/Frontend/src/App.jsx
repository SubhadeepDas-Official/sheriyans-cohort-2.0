import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    axios.get('http://localhost:3000/api/notes').then((res) => {
      setNotes(res.data.notes);
    });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    // console.log(title.value,description.value)
    // console.log(e.target.elements.title.value);
    // console.log(e.target.elements.description.value);
    await axios.post('http://localhost:3000/api/notes', {
      title: title.value,
      description: description.value,
    });
    fetchNotes();
    e.target.reset();
  }

  async function handleDeletion(id) {
    await axios.delete('http://localhost:3000/api/notes/' + id);
    fetchNotes();
  }

  const [editingId, setEditingId] = useState(null);
  const [editedDescription, setEditedDescription] = useState('');

  async function handleUpdation(id) {
    await axios.patch('http://localhost:3000/api/notes/' + id, {
      description: editedDescription,
    });
    setEditingId(null);
    setEditedDescription('');
    fetchNotes();
  }

  function handleCancel() {
    setEditingId(null);
    setEditedDescription('');
  }

  return (
    <>
      <form className="notes-create-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <button type="submit">Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note._id}>

              {/* Display Notes */}
              <h1>{note.title}</h1>

              {editingId === note._id ? (
                <input
                  type="text"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                />
              ) : (
                <p>{note.description}</p>
              )}

              {/* Delete Note */}
              <button
                onClick={() => {
                  handleDeletion(note._id);
                }}>
                Delete
              </button>

              {/* Edit Note */}
              {editingId === note._id ? (
                <>
                  <button onClick={() => handleUpdation(note._id)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(note._id);
                    setEditedDescription(note.description);
                  }}>
                  Edit
                </button>
              )}

            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

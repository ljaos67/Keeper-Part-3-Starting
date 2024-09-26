import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function updateNote(event) {
    const { name, value } = event.target;
    setNote((prevVal) => {
      if (name == "title") {
        return { title: value, content: prevVal.content };
      } else if (name == "content") {
        return { title: prevVal.title, content: value };
      }
    });
  }

  return (
    <div>
      <form
        onSubmit={() => {
          props.addNote(event, note);
          setNote({ title: "", content: "" });
        }}
      >
        <input
          onChange={updateNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={updateNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

function InputSection({ title, fields, data, setData, isEditing, setEditing }) {
    return (
      <div className="section">
        <h2>{title}</h2>
        {isEditing ? (
          fields.map((field) => (
            <input
              key={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder}
              className="input"
              value={data[field.name] || ""}
              onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
            />
          ))
        ) : (
          <div className="output">
            {fields.map((field) => (
              <p key={field.name}><strong>{field.placeholder}:</strong> {data[field.name]}</p>
            ))}
          </div>
        )}
        <button onClick={() => setEditing(!isEditing)} className="btn">
          {isEditing ? "Submit" : "Edit"}
        </button>
      </div>
    );
  }

export default InputSection;
import React, { useState } from "react";
import { FaSun, FaTint, FaPlus, FaTimes, FaEdit, FaTrash, FaSeedling, FaCut, FaBug, FaLeaf, FaCloudSun, FaTractor } from "react-icons/fa";
import "./Notes.scss";

interface Note {
  id: number;
  plantName: string;
  date: string;
  tasks: string;
  details: string;
  status: string;
}

const taskOptions = [
  { task: "Tưới nước", status: "water" },
  { task: "Phơi nắng", status: "sun" },
  { task: "Bón phân", status: "fertilizer" },
  { task: "Cắt tỉa", status: "scissors" },
  { task: "Làm cỏ", status: "scissors" },
  { task: "Phun thuốc", status: "fertilizer" },
  { task: "Kiểm tra sâu bệnh", status: "worm" },
  { task: "Thay đất", status: "land" },
  { task: "Gieo hạt", status: "seed" },
  { task: "Thu hoạch", status: "harvest" },
];

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, plantName: "Cà chua", date: "2024-02-28", tasks: "Tưới nước", details: "Đã tưới 500ml nước", status: "water" },
    { id: 2, plantName: "Rau cải", date: "2024-02-27", tasks: "Phơi nắng", details: "Đưa ra nắng 3h", status: "sun" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newPlant, setNewPlant] = useState({ plantName: "", date: "", tasks: "", details: "" });

  const handleAddOrEdit = () => {
    if (!newPlant.plantName || !newPlant.date || !newPlant.tasks) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const selectedTask = taskOptions.find(t => t.task === newPlant.tasks);
    const status = selectedTask ? selectedTask.status : "unknown";

    if (editingId !== null) {
      setNotes(notes.map(note => (note.id === editingId ? { ...note, ...newPlant, status } : note)));
    } else {
      const newNote: Note = {
        id: notes.length + 1,
        plantName: newPlant.plantName,
        date: newPlant.date,
        tasks: newPlant.tasks,
        details: newPlant.details,
        status,
      };
      setNotes([...notes, newNote]);
    }

    setNewPlant({ plantName: "", date: "", tasks: "", details: "" });
    setShowModal(false);
    setEditingId(null);
  };

  const handleEdit = (note: Note) => {
    setNewPlant({ plantName: note.plantName, date: note.date, tasks: note.tasks, details: note.details });
    setEditingId(note.id);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "water": return <FaTint color="blue" />;
      case "sun": return <FaSun color="orange" />;
      case "fertilizer": return <FaLeaf color="green" />;
      case "scissors": return <FaCut color="brown" />;
      case "worm": return <FaBug color="red" />;
      case "land": return <FaCloudSun color="gray" />;
      case "seed": return <FaSeedling color="purple" />;
      case "harvest": return <FaTractor color="goldenrod" />;
      default: return "❓";
    }
  };

  return (
    <div className="notes-container">
      <h2>Bảng chăm sóc cây</h2>
      <button className="add-btn" onClick={() => { setShowModal(true); setEditingId(null); }}>
        <FaPlus /> Thêm cây mới
      </button>

      <table>
        <thead>
          <tr>
            <th>Tên cây</th>
            <th>Ngày ghi chú</th>
            <th>Công việc đã làm</th>
            <th>Ghi chú chi tiết</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {notes.map(note => (
            <tr key={note.id}>
              <td>{note.plantName}</td>
              <td>{note.date}</td>
              <td>{note.tasks}</td>
              <td>{note.details}</td>
              <td>{getStatusIcon(note.status)}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(note)}><FaEdit /></button>
                <button className="delete-btn" onClick={() => handleDelete(note.id)}><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}><FaTimes /></button>
            <h3>{editingId ? "Chỉnh sửa cây" : "Thêm cây mới"}</h3>

            <label>Tên cây</label>
            <input type="text" value={newPlant.plantName} onChange={(e) => setNewPlant({ ...newPlant, plantName: e.target.value })} />

            <label>Ngày ghi chú</label>
            <input type="date" value={newPlant.date} onChange={(e) => setNewPlant({ ...newPlant, date: e.target.value })} />

            <label>Công việc đã làm</label>
            <select value={newPlant.tasks} onChange={(e) => setNewPlant({ ...newPlant, tasks: e.target.value })}>
              <option value="">-- Chọn công việc --</option>
              {taskOptions.map(option => (
                <option key={option.task} value={option.task}>{option.task}</option>
              ))}
            </select>

            <label>Ghi chú chi tiết</label>
            <input type="text" value={newPlant.details} onChange={(e) => setNewPlant({ ...newPlant, details: e.target.value })} />

            <button className="submit-btn" onClick={handleAddOrEdit}>{editingId ? "Lưu chỉnh sửa" : "Thêm cây mới"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;

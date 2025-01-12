import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    technology: "",
    link: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProjects = localStorage.getItem("projects");
      if (savedProjects) {
        setProjects(JSON.parse(savedProjects));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  const validateForm = () => {
    if (!form.name || !form.description || !form.technology || !form.link) {
      setError("All fields are required!");
      return false;
    }
    setError("");
    return true;
  };

  const handleCreate = () => {
    if (!validateForm()) return;

    const newProject = {
      id: Date.now(),
      ...form,
    };
    setProjects([...projects, newProject]);
    setForm({ name: "", description: "", technology: "", link: "" });
  };

  const handleEdit = () => {
    if (!validateForm()) return;

    const updatedProjects = projects.map((project) =>
      project.id === editingId ? { ...project, ...form } : project
    );
    setProjects(updatedProjects);
    setEditingId(null);
    setForm({ name: "", description: "", technology: "", link: "" });
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleStartEdit = (project) => {
    setEditingId(project.id);
    setForm({
      name: project.name,
      description: project.description,
      technology: project.technology,
      link: project.link,
    });
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-6 text-primary">Manage Projects</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {editingId ? "Edit Project" : "Add New Project"}
        </h2>
        <div className="space-y-4">
          {error && <p className="text-red-600">{error}</p>}
          <input
            type="text"
            placeholder="Project Name"
            className="w-full p-2 border rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="Technology"
            className="w-full p-2 border rounded-lg"
            value={form.technology}
            onChange={(e) => setForm({ ...form, technology: e.target.value })}
          />
          <input
            type="url"
            placeholder="Project Link"
            className="w-full p-2 border rounded-lg"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
          />
          <button
            onClick={editingId ? handleEdit : handleCreate}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
          >
            {editingId ? "Update Project" : "Add Project"}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setForm({
                  name: "",
                  description: "",
                  technology: "",
                  link: "",
                });
                setError("");
              }}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel Edit
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start"
          >
            <div>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <p className="text-gray-500 text-sm">
                Tech: {project.technology}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Project
              </a>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleStartEdit(project)}
                className="text-yellow-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

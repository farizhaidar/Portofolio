let projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "A personal portfolio site.",
    technology: "Next.js, TailwindCSS",
  },
];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(projects);
      break;

    case "POST":
      const newProject = { id: Date.now(), ...req.body };
      projects.push(newProject);
      res.status(201).json(newProject);
      break;

    case "PUT":
      const { id, ...updatedData } = req.body;
      projects = projects.map((project) =>
        project.id === id ? { ...project, ...updatedData } : project
      );
      res.status(200).json({ message: "Project updated successfully." });
      break;

    case "DELETE":
      const { projectId } = req.body;
      projects = projects.filter((project) => project.id !== projectId);
      res.status(200).json({ message: "Project deleted successfully." });
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

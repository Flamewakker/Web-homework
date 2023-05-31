import React, { useState } from "react";
import TaskInput from "./For13Task/TaskInput";

function Home13() {
  const categories = [
    { id: "personal", name: "Голодный", icon: "😓" },
    { id: "work", name: "Заметки", icon: "😖" },
    { id: "study", name: "Отдых", icon: "😏" },
    { id: "leisure", name: "Экзамен", icon: "😨" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [tasks, setTasks] = useState([]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks = tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <nav>
        {categories.map(category => (
          <button key={category.id} onClick={() => handleCategoryClick(category.id)}>
            {category.icon} {category.name}
          </button>
        ))}
      </nav>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
      <TaskInput onAddTask={handleAddTask} selectedCategory={selectedCategory} />
    </div>
  );
};


export default Home13;

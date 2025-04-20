import React, { useState } from "react";
import PropTypes from 'prop-types';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Filter out "All" from the category list
  const validCategories = categories.filter(category => category !== "All");

  // Initial form state
  const [formData, setFormData] = useState({
    text: "",
    category: validCategories[0] || ""
  });

  // Handle input and select changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = formData.text.trim();
    if (!trimmedText) return;

    onTaskFormSubmit({
      text: trimmedText,
      category: formData.category
    });

    // Reset form
    setFormData({
      text: "",
      category: validCategories[0] || ""
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">
        Details
        <input
          id="task-details"
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="task-category">
        Category
        <select
          id="task-category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {validCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

NewTaskForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTaskFormSubmit: PropTypes.func.isRequired
};

export default NewTaskForm;

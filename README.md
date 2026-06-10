# Todo List App

A modern, responsive todo list web application with local storage support. Organize your tasks efficiently with an intuitive interface featuring add, edit, delete, and filter capabilities.

## 🎯 Overview

This is a lightweight, no-framework todo list app that runs entirely in the browser. All your tasks are saved locally using browser's localStorage, so you never lose your data. The app features a beautiful gradient UI with smooth animations and full responsiveness for mobile and desktop devices.

## ✨ Features

✅ **Add Tasks** - Type a task and click "Add" or press Enter
✅ **Mark Complete** - Click the checkbox to mark tasks as done
✅ **Edit Tasks** - Click the edit button (✏️) to modify tasks
✅ **Delete Tasks** - Click the trash button (🗑️) to remove tasks
✅ **Filter Tasks** - View All, Active, or Completed tasks
✅ **Clear Completed** - Remove all completed tasks at once
✅ **Persistent Storage** - Tasks are saved to browser's localStorage
✅ **Task Statistics** - See total and completed task counts
✅ **Responsive Design** - Works on desktop and mobile devices

## How to Use

1. Open `index.html` in your web browser
2. Type your task in the input field
3. Press Enter or click the "Add" button
4. Check the checkbox to mark tasks as complete
5. Use filter buttons to view different task types
6. Edit or delete tasks using the action buttons
7. Click "Clear Completed" to remove all finished tasks

## Files

- `index.html` - HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - JavaScript functionality
- `README.md` - This file

## Features in Detail

### Filters

- **All** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

### Storage

All tasks are automatically saved to your browser's localStorage, so your tasks persist even after closing the browser.

### Keyboard Shortcuts

- **Enter** - Add a new task
- **Escape** (in edit mode) - Cancel editing

## 🚀 Quick Start

### Installation

No installation required! Simply clone or download this repository and open `index.html` in your web browser.

```bash
# Clone the repository
git clone <repository-url>
cd todo-list

# Open in your default browser (Windows)
start index.html

# Or open in your default browser (macOS)
open index.html

# Or open in your default browser (Linux)
xdg-open index.html
```

### Manual Setup

1. Download all files from the repository
2. Place them in a folder
3. Open `index.html` with any web browser

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Any modern browser with ES6+ support and localStorage API

## 💻 Technical Stack

- **Frontend Framework**: Vanilla JavaScript (ES6+)
- **Styling**: Pure CSS3 with gradients and animations
- **Storage**: Browser localStorage API
- **HTML5**: Semantic HTML markup
- **Responsive**: Mobile-first CSS design

## 📦 Project Structure

```
todo-list/
├── index.html      # Main HTML structure
├── styles.css      # Styling and responsive design
├── script.js       # JavaScript logic and interactivity
├── README.md       # Documentation (this file)
└── .git/           # Git repository data
```

## 🎨 Design Features

- **Modern UI** - Clean, minimalist interface with gradient background
- **Smooth Animations** - Slide-in animations for new tasks
- **Responsive Layout** - Works on all screen sizes (320px and up)
- **Accessibility** - Semantic HTML and keyboard navigation support
- **Color Scheme** - Purple gradient (#667eea to #764ba2)

## 💾 Data Storage

All tasks are stored in your browser's **localStorage** under the key `todos`. This means:

- ✅ Tasks persist across browser sessions
- ✅ Works offline
- ✅ No server or backend required
- ℹ️ Limited to ~5-10MB per browser (varies by browser)
- ℹ️ Data is local to this browser/domain only

### Exporting Your Data

To export your tasks as JSON:

```javascript
// Open browser console (F12) and run:
JSON.parse(localStorage.getItem("todos"));
```

## 🔧 Development

### File Modifications

- **Add features**: Edit `script.js` for new functionality
- **Change styling**: Modify `styles.css` for UI changes
- **Update structure**: Edit `index.html` for layout changes

### Tips

- Use browser DevTools (F12) to debug
- Check Console for any errors
- Use Network tab to monitor localStorage operations

## 📱 Usage Guide

### Adding Tasks

1. Type your task in the input field
2. Press Enter or click the "Add" button
3. Task appears at the top of the list

### Managing Tasks

- **Check off**: Click the checkbox to mark complete
- **Edit**: Click ✏️ to modify the task text
- **Delete**: Click 🗑️ to remove the task

### Filtering Tasks

- **All**: View all tasks
- **Active**: Show only incomplete tasks
- **Completed**: Show only done tasks

### Bulk Actions

- **Clear Completed**: Removes all finished tasks at once

## 📊 Statistics

The app displays:

- Total number of tasks
- Number of completed tasks
- Updates in real-time as you manage tasks

## ⚙️ Features in Detail

### Filters

- **All** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

### Storage

All tasks are automatically saved to your browser's localStorage, so your tasks persist even after closing the browser.

### Keyboard Shortcuts

- **Enter** - Add a new task
- **Escape** (in edit mode) - Cancel editing

## 🐛 Known Limitations

- Tasks are stored per browser/domain (not synced across devices)
- Clearing browser data will remove all tasks
- Maximum storage depends on browser (typically 5-10MB)
- No categories or priorities (can be added as future features)

## 🔮 Future Enhancement Ideas

- [ ] Task categories/tags
- [ ] Priority levels
- [ ] Due dates and reminders
- [ ] Cloud sync (Firebase, etc.)
- [ ] Dark mode
- [ ] Task descriptions
- [ ] Recurring tasks
- [ ] Export to file (JSON, CSV)
- [ ] Drag-and-drop reordering

## 📄 License

This project is free to use and modify for personal and commercial purposes.

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Suggestions and improvements are welcome!

## ❓ FAQ

**Q: Will my tasks be saved if I close the browser?**
A: Yes! Your tasks are saved in localStorage and will persist across browser sessions.

**Q: Can I use this on mobile?**
A: Yes! The app is fully responsive and works on all mobile devices.

**Q: Is there a limit to how many tasks I can create?**
A: Technically, there's a storage limit (usually 5-10MB), which allows thousands of tasks.

**Q: Can I sync my tasks across devices?**
A: Currently, no. Tasks are stored locally in each browser. You could add cloud sync as a feature.

**Q: What happens if I clear my browser cache?**
A: Your tasks will be deleted. Consider exporting your data regularly.

Enjoy organizing your tasks! 📝

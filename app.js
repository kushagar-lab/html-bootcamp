// Chapters Data
const chapters = [
  {
    id: 1,
    title: 'The Foundations',
    description: 'Learn the basic structure of every HTML page.',
    theory: `
      <h2>Welcome to HTML!</h2>
      <p>HTML stands for HyperText Markup Language. It's the skeleton of all web pages.</p>
      <p>Every page needs a basic structure: <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>.</p>
      <p><strong>Your Task:</strong> Create an <code>&lt;h1&gt;</code> (Main Heading) and a <code>&lt;p&gt;</code> (Paragraph) inside the body.</p>
    `,
    initialCode: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <!-- Add an h1 and a p tag below -->
    
  </body>
</html>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      if (!doc.querySelector('h1')) { score -= 50; feedback.push({msg: 'Missing <h1> tag.', type: 'error'}); }
      else { feedback.push({msg: 'Found <h1> tag.', type: 'success'}); }
      
      if (!doc.querySelector('p')) { score -= 50; feedback.push({msg: 'Missing <p> tag.', type: 'error'}); }
      else { feedback.push({msg: 'Found <p> tag.', type: 'success'}); }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 2,
    title: 'Text Styling',
    description: 'Make your text stand out with bold and italics.',
    theory: `
      <h2>Styling Text</h2>
      <p>You can emphasize text using <code>&lt;strong&gt;</code> (bold) and <code>&lt;em&gt;</code> (italic).</p>
      <p><strong>Your Task:</strong> Write a paragraph that contains both a <code>&lt;strong&gt;</code> tag and an <code>&lt;em&gt;</code> tag.</p>
    `,
    initialCode: `<body>
  <p>This is a normal paragraph, but some words should be bold and some should be italic.</p>
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      if (!doc.querySelector('strong')) { score -= 50; feedback.push({msg: 'Missing <strong> tag.', type: 'error'}); }
      else { feedback.push({msg: 'Found <strong> tag.', type: 'success'}); }
      
      if (!doc.querySelector('em')) { score -= 50; feedback.push({msg: 'Missing <em> tag.', type: 'error'}); }
      else { feedback.push({msg: 'Found <em> tag.', type: 'success'}); }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 3,
    title: 'The Organizer',
    description: 'Create lists to organize information.',
    theory: `
      <h2>Lists</h2>
      <p>Unordered lists use <code>&lt;ul&gt;</code> and ordered lists use <code>&lt;ol&gt;</code>. Both use <code>&lt;li&gt;</code> for items.</p>
      <p><strong>Your Task:</strong> Create an unordered list with at least 3 items, and an ordered list with at least 2 items.</p>
    `,
    initialCode: `<body>
  <h2>My Shopping List</h2>
  <!-- Create an unordered list here -->
  
  <h2>My Top Movies</h2>
  <!-- Create an ordered list here -->
  
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      const ul = doc.querySelector('ul');
      const ol = doc.querySelector('ol');
      
      if (!ul) { score -= 30; feedback.push({msg: 'Missing <ul> tag.', type: 'error'}); }
      else if (ul.querySelectorAll('li').length < 3) { score -= 20; feedback.push({msg: '<ul> needs at least 3 <li> items.', type: 'error'}); }
      else { feedback.push({msg: 'Valid Unordered List found.', type: 'success'}); }
      
      if (!ol) { score -= 30; feedback.push({msg: 'Missing <ol> tag.', type: 'error'}); }
      else if (ol.querySelectorAll('li').length < 2) { score -= 20; feedback.push({msg: '<ol> needs at least 2 <li> items.', type: 'error'}); }
      else { feedback.push({msg: 'Valid Ordered List found.', type: 'success'}); }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 4,
    title: 'The Web Weaver',
    description: 'Connect pages with links and embed images.',
    theory: `
      <h2>Links and Images</h2>
      <p>Links are created with <code>&lt;a href="url"&gt;</code>.</p>
      <p>Images are embedded with <code>&lt;img src="url" alt="description"&gt;</code>. Notice images don't have a closing tag.</p>
      <p><strong>Your Task:</strong> Add a link to google.com and an image with an alt attribute.</p>
    `,
    initialCode: `<body>
  <!-- Add a link here -->
  
  <!-- Add an image here -->
  
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      const a = doc.querySelector('a');
      const img = doc.querySelector('img');
      
      if (!a) { score -= 25; feedback.push({msg: 'Missing <a> tag.', type: 'error'}); }
      else if (!a.hasAttribute('href')) { score -= 25; feedback.push({msg: '<a> tag is missing the href attribute.', type: 'error'}); }
      else { feedback.push({msg: 'Valid Link found.', type: 'success'}); }
      
      if (!img) { score -= 25; feedback.push({msg: 'Missing <img> tag.', type: 'error'}); }
      else if (!img.hasAttribute('alt')) { score -= 25; feedback.push({msg: '<img> tag is missing the alt attribute.', type: 'error'}); }
      else { feedback.push({msg: 'Valid Image found.', type: 'success'}); }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 5,
    title: 'The Data Master',
    description: 'Structure tabular data using tables.',
    theory: `
      <h2>Tables</h2>
      <p>Use <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> for rows, <code>&lt;th&gt;</code> for headers, and <code>&lt;td&gt;</code> for data cells.</p>
      <p><strong>Your Task:</strong> Create a table with 1 header row (containing <th>) and at least 1 data row (containing <td>).</p>
    `,
    initialCode: `<body>
  <!-- Build your table here -->
  
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      const table = doc.querySelector('table');
      if (!table) {
        return { score: 0, feedback: [{msg: 'Missing <table> tag.', type: 'error'}] };
      }
      
      if (!table.querySelector('th')) { score -= 30; feedback.push({msg: 'Missing <th> (Table Header).', type: 'error'}); }
      else { feedback.push({msg: 'Table Header found.', type: 'success'}); }
      
      if (!table.querySelector('td')) { score -= 30; feedback.push({msg: 'Missing <td> (Table Data).', type: 'error'}); }
      else { feedback.push({msg: 'Table Data found.', type: 'success'}); }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 6,
    title: 'The Interactor',
    description: 'Collect user input using forms.',
    theory: `
      <h2>Forms</h2>
      <p>Forms use the <code>&lt;form&gt;</code> wrapper. Inside, you can have <code>&lt;input&gt;</code> and <code>&lt;button&gt;</code> elements.</p>
      <p><strong>Your Task:</strong> Create a form containing a text input, a password input, and a submit button.</p>
    `,
    initialCode: `<body>
  <!-- Build your form here -->
  
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      const form = doc.querySelector('form');
      if (!form) { return { score: 0, feedback: [{msg: 'Missing <form> tag.', type: 'error'}] }; }
      
      const inputs = form.querySelectorAll('input');
      let hasText = false, hasPass = false;
      inputs.forEach(i => {
        if (i.type === 'text' || !i.hasAttribute('type')) hasText = true;
        if (i.type === 'password') hasPass = true;
      });
      
      if (!hasText) { score -= 30; feedback.push({msg: 'Missing text <input>.', type: 'error'}); }
      else { feedback.push({msg: 'Text input found.', type: 'success'}); }
      
      if (!hasPass) { score -= 30; feedback.push({msg: 'Missing password <input>.', type: 'error'}); }
      else { feedback.push({msg: 'Password input found.', type: 'success'}); }
      
      if (!form.querySelector('button') && !form.querySelector('input[type="submit"]')) {
        score -= 30; feedback.push({msg: 'Missing submit <button>.', type: 'error'});
      } else {
        feedback.push({msg: 'Submit button found.', type: 'success'});
      }
      
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 7,
    title: 'The Architect',
    description: 'Write modern Semantic HTML5.',
    theory: `
      <h2>Semantic HTML</h2>
      <p>Instead of using <code>&lt;div&gt;</code> for everything, use meaningful tags: <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>.</p>
      <p><strong>Your Task:</strong> Build a page layout that includes a header, a nav, a section, and a footer.</p>
    `,
    initialCode: `<body>
  <!-- Build your semantic layout here -->
  
</body>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      const required = ['header', 'nav', 'section', 'footer'];
      required.forEach(tag => {
        if (!doc.querySelector(tag)) {
          score -= 25;
          feedback.push({msg: `Missing <${tag}> tag.`, type: 'error'});
        } else {
          feedback.push({msg: `Found <${tag}>.`, type: 'success'});
        }
      });
      return { score: Math.max(0, score), feedback };
    }
  },
  {
    id: 8,
    title: 'Final Boss',
    description: 'Put everything together into a complete page.',
    theory: `
      <h2>The Ultimate Test</h2>
      <p>Combine all your knowledge. You must build a page that contains:</p>
      <ul>
        <li>A Header with an H1</li>
        <li>A Navigation list (ul inside nav)</li>
        <li>An Image with alt text</li>
        <li>A Form with an input and button</li>
      </ul>
      <p><strong>Good luck!</strong></p>
    `,
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Final Boss</title>
</head>
<body>
  
</body>
</html>`,
    evaluate: (doc) => {
      let score = 100;
      let feedback = [];
      
      // 1. Header with H1
      const header = doc.querySelector('header');
      if (!header || !header.querySelector('h1')) { score -= 25; feedback.push({msg: 'Missing <header> containing an <h1>.', type: 'error'}); }
      else { feedback.push({msg: 'Header with H1 found.', type: 'success'}); }
      
      // 2. Nav with UL
      const nav = doc.querySelector('nav');
      if (!nav || !nav.querySelector('ul')) { score -= 25; feedback.push({msg: 'Missing <nav> containing a <ul>.', type: 'error'}); }
      else { feedback.push({msg: 'Nav with UL found.', type: 'success'}); }
      
      // 3. Image with alt
      const img = doc.querySelector('img');
      if (!img || !img.hasAttribute('alt')) { score -= 25; feedback.push({msg: 'Missing <img> with an alt attribute.', type: 'error'}); }
      else { feedback.push({msg: 'Image with alt found.', type: 'success'}); }
      
      // 4. Form with input and button
      const form = doc.querySelector('form');
      if (!form || !form.querySelector('input') || (!form.querySelector('button') && !form.querySelector('input[type="submit"]'))) {
        score -= 25; feedback.push({msg: 'Missing <form> containing an <input> and <button>.', type: 'error'});
      } else {
        feedback.push({msg: 'Form with input and button found.', type: 'success'});
      }
      
      return { score: Math.max(0, score), feedback };
    }
  }
];

// App State
let currentState = {
  view: 'map', // 'map' or 'chapter'
  currentChapterId: null,
  progress: JSON.parse(localStorage.getItem('htmlBootcampProgress')) || { 1: { unlocked: true, completed: false, score: 0 } }
};

// Ensure Chapter 1 is always unlocked
if (!currentState.progress[1]) currentState.progress[1] = { unlocked: true, completed: false, score: 0 };

let editorInstance = null;

// DOM Elements
const appDiv = document.getElementById('app');

// Initialization
function init() {
  render();
}

function saveProgress() {
  localStorage.getItem('htmlBootcampProgress', JSON.stringify(currentState.progress));
}

// Render Engine
function render() {
  appDiv.innerHTML = '';
  
  // Header
  const header = document.createElement('header');
  header.innerHTML = `
    <h1>&lt;HTML Bootcamp /&gt;</h1>
    <div class="level-badge">
      <span>XP: ${calculateTotalScore()}</span>
    </div>
  `;
  appDiv.appendChild(header);

  if (currentState.view === 'map') {
    renderMap();
  } else if (currentState.view === 'chapter') {
    renderChapter();
  }
}

function calculateTotalScore() {
  let total = 0;
  for (const id in currentState.progress) {
    if (currentState.progress[id].score) {
      total += currentState.progress[id].score;
    }
  }
  return total;
}

// Views
function renderMap() {
  const container = document.createElement('div');
  container.className = 'view-container';
  
  const intro = document.createElement('div');
  intro.innerHTML = `
    <h2 style="font-size: 2rem; margin-bottom: 10px;">Select a Chapter</h2>
    <p style="color: var(--text-muted); margin-bottom: 20px;">Progress through the levels to master HTML.</p>
  `;
  container.appendChild(intro);

  const mapGrid = document.createElement('div');
  mapGrid.className = 'map-container';

  chapters.forEach(ch => {
    const p = currentState.progress[ch.id];
    const isUnlocked = p && p.unlocked;
    const isCompleted = p && p.completed;
    
    const card = document.createElement('div');
    card.className = `glass-panel chapter-card ${isUnlocked ? 'unlocked' : ''} ${isCompleted ? 'completed' : ''}`;
    
    let statusText = isCompleted ? 'Completed' : (isUnlocked ? 'Unlocked' : 'Locked');
    if (isCompleted && p.score) statusText += ` (${p.score}%)`;

    card.innerHTML = `
      <span class="ch-number">Chapter ${ch.id}</span>
      <h3>${ch.title}</h3>
      <p style="margin-bottom: 20px;">${ch.description}</p>
      <span class="status-badge">${statusText}</span>
    `;

    if (isUnlocked) {
      card.onclick = () => {
        currentState.view = 'chapter';
        currentState.currentChapterId = ch.id;
        render();
      };
    } else {
      card.style.opacity = '0.6';
      card.style.cursor = 'not-allowed';
    }

    mapGrid.appendChild(card);
  });

  container.appendChild(mapGrid);
  appDiv.appendChild(container);
}

function renderChapter() {
  const ch = chapters.find(c => c.id === currentState.currentChapterId);
  
  const container = document.createElement('div');
  container.className = 'view-container playground-layout';

  // Toolbar
  const toolbar = document.createElement('div');
  toolbar.style.display = 'flex';
  toolbar.style.justifyContent = 'space-between';
  toolbar.style.alignItems = 'center';
  toolbar.innerHTML = `
    <button class="btn btn-outline" id="btn-back">← Back to Map</button>
    <div style="font-weight: 600; font-size: 1.25rem;">Chapter ${ch.id}: ${ch.title}</div>
    <button class="btn btn-accent" id="btn-submit">Submit Code ✓</button>
  `;
  container.appendChild(toolbar);

  // Theory
  const theoryPanel = document.createElement('div');
  theoryPanel.className = 'glass-panel theory-section';
  theoryPanel.innerHTML = ch.theory;
  container.appendChild(theoryPanel);

  // Split Editor/Preview
  const splitPane = document.createElement('div');
  splitPane.className = 'editor-preview-split';

  // Editor Side
  const editorPane = document.createElement('div');
  editorPane.className = 'pane';
  editorPane.innerHTML = `
    <div class="pane-header">index.html</div>
    <div id="monaco-container" class="editor-container"></div>
  `;
  splitPane.appendChild(editorPane);

  // Preview Side
  const previewPane = document.createElement('div');
  previewPane.className = 'pane';
  previewPane.innerHTML = `
    <div class="pane-header">Live Preview</div>
    <div class="preview-container">
      <iframe id="preview-frame"></iframe>
    </div>
  `;
  splitPane.appendChild(previewPane);

  container.appendChild(splitPane);
  appDiv.appendChild(container);

  // Attach Events
  document.getElementById('btn-back').onclick = () => {
    currentState.view = 'map';
    currentState.currentChapterId = null;
    render();
  };

  document.getElementById('btn-submit').onclick = () => evaluateCode();

  // Initialize Monaco Editor once DOM is ready
  setTimeout(() => initMonaco(ch.initialCode), 100);
}

function initMonaco(initialCode) {
  if (window.require) {
    require(['vs/editor/editor.main'], function () {
      const container = document.getElementById('monaco-container');
      container.innerHTML = ''; // Clear just in case
      editorInstance = monaco.editor.create(container, {
        value: initialCode,
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false },
        fontSize: 14,
        fontFamily: "'Fira Code', monospace"
      });

      // Initial update
      updatePreview();

      // On Change
      editorInstance.onDidChangeModelContent(() => {
        updatePreview();
      });
    });
  } else {
    // Fallback if require isn't loaded yet
    setTimeout(() => initMonaco(initialCode), 500);
  }
}

function updatePreview() {
  if (!editorInstance) return;
  const code = editorInstance.getValue();
  const iframe = document.getElementById('preview-frame');
  if (iframe) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  }
}

// Grading Logic
function evaluateCode() {
  const code = editorInstance.getValue();
  const ch = chapters.find(c => c.id === currentState.currentChapterId);
  
  // Parse HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(code, 'text/html');

  const result = ch.evaluate(doc);
  showFeedbackModal(result);
}

function showFeedbackModal(result) {
  let modalOverlay = document.getElementById('feedback-modal');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.id = 'feedback-modal';
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);
  }

  const isPass = result.score >= 80;
  let circleClass = result.score === 100 ? 'perfect' : (isPass ? '' : 'poor');
  
  let feedbackHtml = result.feedback.map(f => `<li class="${f.type}">${f.msg}</li>`).join('');

  modalOverlay.innerHTML = `
    <div class="glass-panel modal-content">
      <h2>Evaluation Result</h2>
      <div class="score-circle ${circleClass}">${result.score}</div>
      <h3>${isPass ? 'Great Job!' : 'Needs Improvement'}</h3>
      <ul class="feedback-list">${feedbackHtml}</ul>
      <button class="btn ${isPass ? 'btn-accent' : ''}" id="btn-modal-close">${isPass ? 'Continue' : 'Try Again'}</button>
    </div>
  `;

  // Animate in
  setTimeout(() => modalOverlay.classList.add('active'), 10);

  document.getElementById('btn-modal-close').onclick = () => {
    modalOverlay.classList.remove('active');
    setTimeout(() => modalOverlay.remove(), 300);

    if (isPass) {
      // Save progress
      currentState.progress[currentState.currentChapterId].completed = true;
      currentState.progress[currentState.currentChapterId].score = Math.max(currentState.progress[currentState.currentChapterId].score || 0, result.score);
      
      // Unlock next
      const nextId = currentState.currentChapterId + 1;
      if (chapters.find(c => c.id === nextId)) {
        if (!currentState.progress[nextId]) {
          currentState.progress[nextId] = { unlocked: true, completed: false, score: 0 };
        } else {
          currentState.progress[nextId].unlocked = true;
        }
      }
      saveProgress();
      
      // Go to map
      currentState.view = 'map';
      currentState.currentChapterId = null;
      render();
    }
  };
}

// Start app
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

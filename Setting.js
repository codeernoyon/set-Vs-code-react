{
  // editor
  "editor.fontSize": 16,
  "editor.fontFamily": "'Operator Mono', 'Fira Code', monospace",
  "editor.fontLigatures": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.cursorBlinking": "phase",
  "editor.cursorStyle": "line-thin",
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          "comment",
          "keyword",
          "storage",
          "variable.language",
          "constant.language.boolean",
          "constant.language.null",
          "constant.language.undefined",
          "constant.language.string.js",
          "entity.name.function",
          "entity.name.class",
          "variable.other",
          "variable.other.local",
          "variable.other.parameter",
          "support.type.property-name.css",
          "support.type.property-name.id-css",
          "source.css",
          "meta.selector.css",
          "entity.name.selector.class",
          "entity.name.selector.id",
          "meta.property-value.css",
          "meta.property-list.css",
          "source.js",
          "meta.object-literal.key",
          "variable.other.property",
          "meta.object-literal.value",
          "constant.numeric",
          "entity.name.type.class.js",
          "entity.name.tag.js",
          "entity.name.function.js",
          "variable.other.local.js",
          "variable.other.property.js",
          "meta.attribute-name.js",
          "meta.tag.attribute.js",
          "meta.tag.js",
          "meta.tag.attributes.js",
          "meta.object-literal.value.js",
          "constant.numeric.js",
          "keyword.operator.comparison.js",
          "keyword.operator.js",
          "keyword.operator.assignment.js",
          "string.quoted.double.js",
          "constant.language.string.js",
          "punctuation.separator.delimiter.js",
          "meta.operator.js",
          "punctuation.separator.delimiter.js",
          "keyword.operator.equal.js",
          "meta.operator.js",
          "constant.language.string.js"
        ],

        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  },
  // code formatting
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll.tslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "eslint.alwaysShowStatus": true,
  // terminal
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.fontWeight": "normal",
  "terminal.integrated.fontFamily": "monospace",
  // theme & icons
  "workbench.colorTheme": "Learn with Sumit Official Theme",
  "workbench.iconTheme": "material-icon-theme",
  // terminal colors
  "workbench.colorCustomizations": {
    "terminal.background": "#1a1a2e", // Deep purple for the background
    "terminal.foreground": "#f3f4f8", // Bright light gray text to stand out
    "terminalCursor.background": "#ff00ff", // Neon pink cursor
    "terminalCursor.foreground": "#ff00ff", // Make the cursor stand out
    "terminal.ansiBlack": "#1c1c2e", // Slightly darker black for that cosmic effect
    "terminal.ansiRed": "#ff1744", // Neon red
    "terminal.ansiGreen": "#00e676", // Electric green
    "terminal.ansiYellow": "#ffea00", // Bright yellow for warnings
    "terminal.ansiBlue": "#2979ff", // Vivid blue like the sky
    "terminal.ansiMagenta": "#d500f9", // Ultra purple
    "terminal.ansiCyan": "#00b8d4", // Shocking cyan
    "terminal.ansiWhite": "#ffffff", // Bright white for text
    "terminal.ansiBrightBlack": "#38384f", // Darker version of black
    "terminal.ansiBrightRed": "#ff5252", // Vivid red glow
    "terminal.ansiBrightGreen": "#69f0ae", // Bright green burst
    "terminal.ansiBrightYellow": "#ffd600", // Super bright yellow
    "terminal.ansiBrightBlue": "#448aff", // Glowing blue
    "terminal.ansiBrightMagenta": "#f50057", // Super bright pink
    "terminal.ansiBrightCyan": "#00e5ff", // Glowing cyan
    "terminal.ansiBrightWhite": "#e1e1e6" // Almost glowing white
  }
}

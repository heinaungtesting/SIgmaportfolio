# Claude Code Agent Guide for Portfolio Development

This document outlines the recommended Claude Code agents, commands, and workflows for developing and maintaining this JSON-driven portfolio website.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Recommended Agents](#recommended-agents)
3. [Custom Slash Commands](#custom-slash-commands)
4. [Common Development Workflows](#common-development-workflows)
5. [MCP Servers (Optional)](#mcp-servers-optional)
6. [Best Practices](#best-practices)

---

## Project Overview

**Portfolio Type:** Static JSON-driven website  
**Tech Stack:** Vanilla HTML, CSS, JavaScript  
**Data Source:** `mydata.json`  
**Deployment:** GitHub Pages  
**Custom Domain:** heinportfolio.com

**Key Features:**
- Zero build step
- All content loaded from JSON
- Light/dark theme support
- Fully responsive and accessible
- Modal project details
- Contact form with email copy

---

## Recommended Agents

### 1. **Explore Agent** - Code Navigation
Use when you need to understand the codebase structure or find specific implementations.

**When to use:**
- "Where is the theme toggle implemented?"
- "How does the project modal work?"
- "Show me all the rendering functions"

**Example:**
```
@claude explore the theme switching logic
```

**Thoroughness levels:**
- `quick` - Basic file search
- `medium` - Multiple locations
- `very thorough` - Comprehensive analysis

---

### 2. **Plan Agent** - Feature Planning
Use before implementing new features or major changes.

**When to use:**
- Adding new sections to the portfolio
- Implementing contact form backend
- Adding animations or transitions
- Integrating analytics or SEO tools

**Example:**
```
@claude plan how to add a blog section to the portfolio that loads from blog-posts.json
```

---

### 3. **General Purpose Agent** - Complex Tasks
Use for multi-step tasks that require research and implementation.

**When to use:**
- "Add Google Analytics tracking"
- "Optimize images and add lazy loading"
- "Create a contact form that sends emails via Formspree"
- "Add RSS feed generation"

**Example:**
```
@claude implement a contact form that integrates with Formspree API
```

---

## Custom Slash Commands

Create these custom commands in `.claude/commands/` for quick portfolio maintenance:

### `/update-content`
```markdown
# Update Portfolio Content

Read `mydata.json` and help me update specific sections:
1. Show current content structure
2. Ask which section to update (projects, experience, skills, etc.)
3. Guide me through updating the data
4. Validate JSON syntax
5. Preview changes
```

**File:** `.claude/commands/update-content.md`

---

### `/add-project`
```markdown
# Add New Project

Help me add a new project to the portfolio:
1. Ask for project details (title, description, tags, links, image)
2. Generate optimized project entry JSON
3. Add to `mydata.json` projects array
4. Remind to add project image to `/assets/`
5. Show preview of how it will look

Include these fields:
- title
- image (path)
- short (one-line description)
- longText (detailed description for modal)
- tags (array)
- links (demo, repo)
```

**File:** `.claude/commands/add-project.md`

---

### `/optimize`
```markdown
# Optimize Portfolio Performance

Run performance optimization checks:
1. Check image sizes and suggest compression
2. Analyze CSS for unused styles
3. Review JavaScript for optimization opportunities
4. Check accessibility with WCAG guidelines
5. Suggest Lighthouse improvements
6. Review meta tags and SEO

Provide actionable recommendations with priority levels.
```

**File:** `.claude/commands/optimize.md`

---

### `/deploy`
```markdown
# Deploy Portfolio to GitHub Pages

Help me deploy the latest changes:
1. Check git status
2. Review uncommitted changes
3. Run basic validation (JSON syntax, broken links)
4. Create commit with descriptive message
5. Push to main branch
6. Verify GitHub Pages deployment
7. Check custom domain status (heinportfolio.com)
8. Test HTTPS certificate

Provide deployment checklist and post-deployment verification steps.
```

**File:** `.claude/commands/deploy.md`

---

### `/theme`
```markdown
# Customize Theme Colors

Help me customize the portfolio theme:
1. Show current CSS color variables
2. Suggest color palettes (provide 3-5 options)
3. Update CSS variables in styles.css
4. Ensure WCAG AA contrast compliance
5. Preview changes in both light and dark modes

Ask for my preference:
- Brand color (primary)
- Accent colors
- Preferred mood (professional, creative, minimal, bold)
```

**File:** `.claude/commands/theme.md`

---

### `/validate`
```markdown
# Validate Portfolio Data

Validate mydata.json and project integrity:
1. Check JSON syntax and structure
2. Verify all image paths exist
3. Validate URLs (check for broken links)
4. Ensure required fields are present
5. Check for accessibility issues (alt text, ARIA labels)
6. Validate date formats in experience section
7. Test responsiveness issues

Provide detailed report with:
- ✅ Passed checks
- ⚠️ Warnings
- ❌ Critical issues
```

**File:** `.claude/commands/validate.md`

---

## Common Development Workflows

### Workflow 1: Adding a New Portfolio Section

```bash
# Step 1: Plan the feature
@claude plan adding a "Certifications" section to the portfolio

# Step 2: Update mydata.json schema
/update-content

# Step 3: Implement rendering logic
@claude add rendering function for certifications section in app.js

# Step 4: Add styles
@claude add CSS styles for certifications cards in styles.css

# Step 5: Validate and deploy
/validate
/deploy
```

---

### Workflow 2: Content Update Cycle

```bash
# Update portfolio with new project
/add-project

# Validate everything works
/validate

# Deploy to production
/deploy
```

---

### Workflow 3: Performance Optimization

```bash
# Run optimization analysis
/optimize

# Implement recommended changes
@claude implement the recommended performance optimizations

# Verify improvements
@claude run Lighthouse audit and compare scores
```

---

### Workflow 4: Theme Customization

```bash
# Customize colors
/theme

# Preview changes locally
# (open in browser with live server)

# Deploy if satisfied
/deploy
```

---

## MCP Servers (Optional)

Consider installing these MCP servers for enhanced capabilities:

### 1. **Filesystem MCP** (File Operations)
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/SIgmaportfolio"]
    }
  }
}
```

**Benefits:** Better file system access, batch operations

---

### 2. **GitHub MCP** (Repository Management)
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

**Benefits:** Create issues, PRs, manage releases directly

---

### 3. **Puppeteer MCP** (Browser Testing)
```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

**Benefits:** Automated screenshot testing, accessibility audits, Lighthouse scores

---

### 4. **Memory MCP** (Project Context)
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```

**Benefits:** Remember project-specific context across sessions

---

## Best Practices

### 1. **Always Validate Before Deploy**
```bash
/validate && /deploy
```

Never deploy without running validation to catch:
- Broken image paths
- JSON syntax errors
- Missing required fields
- Accessibility issues

---

### 2. **Use Agents for Complex Tasks**
Don't manually edit multiple files for interconnected changes. Use agents:

```bash
# ❌ Bad: Manual edits across HTML, CSS, JS
# ✅ Good: Use agent for coordinated changes
@claude add a new testimonials carousel with auto-rotation
```

---

### 3. **Keep mydata.json Clean**
Maintain consistent formatting:
```bash
# Auto-format JSON
@claude format mydata.json with proper indentation and structure
```

---

### 4. **Regular Backups**
```bash
# Create tagged backups before major changes
git tag -a v1.0 -m "Portfolio stable version"
git push origin v1.0
```

---

### 5. **Performance Monitoring**
Run optimization checks monthly:
```bash
/optimize
```

Track metrics:
- Lighthouse scores
- Page load time
- Bundle sizes
- Image optimization

---

### 6. **Accessibility First**
Always check accessibility after changes:
```bash
@claude audit accessibility and ensure WCAG AA compliance
```

Key checkpoints:
- ✅ Alt text on all images
- ✅ Keyboard navigation works
- ✅ Color contrast ratios
- ✅ Focus states visible
- ✅ Semantic HTML
- ✅ ARIA labels

---

## Quick Reference Commands

| Task | Command |
|------|---------|
| Add new project | `/add-project` |
| Update content | `/update-content` |
| Change theme colors | `/theme` |
| Validate portfolio | `/validate` |
| Optimize performance | `/optimize` |
| Deploy to GitHub Pages | `/deploy` |
| Plan new feature | `@claude plan [feature]` |
| Find code | `@claude explore [query]` |

---

## Maintenance Checklist

### Weekly
- [ ] Check for broken links
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Review analytics (if integrated)

### Monthly
- [ ] Run `/optimize` for performance
- [ ] Update project descriptions
- [ ] Refresh testimonials
- [ ] Check custom domain SSL cert

### Quarterly
- [ ] Major content refresh
- [ ] Lighthouse audit
- [ ] SEO review
- [ ] Dependency updates (if any added)

---

## Getting Started

1. **Create slash commands directory:**
   ```bash
   mkdir -p .claude/commands
   ```

2. **Create your first command:**
   ```bash
   # Copy one of the commands above to .claude/commands/
   echo "Read mydata.json and validate structure" > .claude/commands/validate.md
   ```

3. **Use it:**
   ```bash
   /validate
   ```

4. **Customize for your workflow** - Edit commands to match your needs

---

## Need Help?

- **Claude Code Docs:** https://docs.claude.com/en/docs/claude-code
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **Portfolio Issues:** Create issue in this repository

---

**Last Updated:** 2025-11-16  
**Maintained by:** Claude Code Agents

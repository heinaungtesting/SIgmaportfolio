Help me customize the portfolio theme colors:

1. **Show current theme:**
   - Display current CSS color variables from styles.css
   - Show both light and dark mode colors

2. **Ask for preferences:**
   - What mood? (professional, creative, minimal, bold, playful)
   - Preferred brand color (or auto-suggest based on mood)
   - Industry/field (tech, design, business, creative, etc.)

3. **Suggest color palettes:**
   - Provide 3-5 complete color palette options
   - Include both light and dark mode variants
   - Show hex codes and visual representation

4. **Implement chosen palette:**
   - Update CSS variables in styles.css
   - Update both `:root` and `[data-theme="dark"]` sections
   - Maintain existing variable names

5. **Accessibility check:**
   - Verify WCAG AA contrast ratios (4.5:1 for text)
   - Check readability in both themes
   - Suggest adjustments if needed

6. **Preview instructions:**
   - Remind to test in browser
   - Check both light and dark modes
   - Test on different screen sizes

Color variables to update:
- --accent (primary brand color)
- --accent-hover (hover state)
- --bg-primary (main background)
- --bg-secondary (secondary background)
- --bg-elevated (cards, modals)
- --text-primary (main text)
- --text-secondary (secondary text)
- --text-tertiary (subtle text)
- --border (border colors)

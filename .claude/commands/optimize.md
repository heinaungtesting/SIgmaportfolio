Run comprehensive performance optimization checks:

1. **Image Analysis:**
   - Check all images in `/assets/` directory
   - Report file sizes
   - Suggest compression opportunities
   - Recommend modern formats (WebP, AVIF)

2. **CSS Review:**
   - Analyze styles.css for unused styles
   - Check for optimization opportunities
   - Verify CSS custom properties usage
   - Review media queries

3. **JavaScript Analysis:**
   - Review app.js for performance bottlenecks
   - Check for unnecessary DOM manipulations
   - Suggest code splitting opportunities
   - Verify event listener efficiency

4. **Accessibility Audit:**
   - WCAG AA compliance check
   - Color contrast ratios
   - Alt text on images
   - Keyboard navigation
   - Focus states
   - Semantic HTML usage
   - ARIA labels

5. **SEO Check:**
   - Meta tags completeness
   - Open Graph tags
   - Sitemap (suggest if missing)
   - robots.txt
   - Structured data

6. **Lighthouse Simulation:**
   - Estimate performance score
   - Suggest improvements for 95+ scores

Provide report with:
- ✅ Passed items
- ⚠️ Warnings (nice to have)
- ❌ Critical issues (must fix)
- Priority ranking (High/Medium/Low)

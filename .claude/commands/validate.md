Validate portfolio data and project integrity:

1. **JSON Structure:**
   - Parse mydata.json and check for syntax errors
   - Verify all required fields are present
   - Check data types match expected schema
   - Validate array structures

2. **Required Fields Check:**
   - brand (string)
   - tagline (string)
   - projects (array with: title, image, short, tags, links)
   - experience (array with: company, role, start, end)
   - contact (object with: email, socials)
   - seo (object with: title, description)

3. **File Path Validation:**
   - Check all image paths in mydata.json exist
   - Verify avatar image
   - Verify all project images
   - Verify og:image
   - Check for orphaned images in /assets/

4. **URL Validation:**
   - Test all external URLs (demo, repo, socials)
   - Check for broken links
   - Verify social media URLs are properly formatted
   - Validate email format

5. **Date Format Check:**
   - Verify experience dates (YYYY-MM format or "Present")
   - Check chronological order
   - Ensure no future dates (except "Present")

6. **Accessibility Validation:**
   - All images have alt text (from JSON)
   - No missing ARIA labels
   - Check color contrast (if theme was customized)
   - Verify semantic HTML structure in index.html

7. **Content Quality:**
   - Check for placeholder text
   - Verify no "Lorem ipsum" or default content
   - Ensure project descriptions are meaningful
   - Check for broken internal anchors

8. **Output Format:**

```
Portfolio Validation Report
===========================

✅ PASSED (X items)
- JSON syntax valid
- All required fields present
- File paths verified
[list all passed items]

⚠️ WARNINGS (X items)
- project1.jpg is large (>500KB), consider compressing
- Missing og:image for better social sharing
[list warnings]

❌ CRITICAL ISSUES (X items)
- assets/missing-image.jpg referenced but not found
- Invalid email format in contact section
[list critical issues]

SUMMARY
-------
Status: [PASS / FAIL / PASS WITH WARNINGS]
Total checks: X
Passed: X
Warnings: X
Failed: X
```

If any critical issues found, do NOT recommend deploying until fixed.

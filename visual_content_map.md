# Visual Content & Asset Map
> strict mapping of PDF extraction to Website Components

## Global Assets
- **Logo/Brand**: `img-002`, `img-003`, `img-005` (Recurring header/footer elements)
- **Watermarks/Decor**: `img-006`, `img-008` (Design elements, vertical lines)

## Page 1: Cover & Hero
- **Context**: First impression, big impact.
- **Image**: `img-000.jpg` (610KB) - **Primary Hero Image**
- **Text**: "Designed by Emerald"
- **Website Dest**: `src/app/page.tsx` (Hero Section)

## Page 2: Introduction / About
- **Context**: "Who we are"
- **Image**: `img-001.jpg` (196KB) - Likely an interior detail or portrait.
- **Text**: "Designed by Emerald is an interior design studio..."
- **Website Dest**: `src/app/page.tsx` (Intro) OR `src/app/about/page.tsx`

## Page 3-4: Vision & Mission
- **Context**: Strategic pillars.
- **Images**: `img-004.jpg`, `img-007.jpg` (610KB)
- **Text**: Vision ("To create thoughtfully designed interiors..."), Mission.
- **Website Dest**: `src/app/about/page.tsx` (Vision/Mission Section)

## Page 5: Services
- **Context**: Service list.
- **Images**: `img-010.jpg`, `img-011.jpg`
- **Text**: Smart & Sustainable, Turnkey Fit-out, Electromechanical, Building Management.
- **Website Dest**: `src/app/services/page.tsx`

## Portfolio Projects (Pages 6-19)

### 01. Yas West Villa
- **Images**: `img-029.png` (1.1MB, Hero), `img-030`, `img-031`
- **Website Dest**: `src/app/work/yas-west-villa`

### 02. Cafe Interior
- **Images**: `img-032.png` (1MB), `img-033.png` (1.1MB)
- **Website Dest**: `src/app/work/cafe-interior`

### 03-05. Dubai Festival City Albadia
- **Images**: `img-037.png` (822KB), `img-038.png` (837KB), `img-039.png`, `img-043.png`
- **Website Dest**: `src/app/work/albadia-residence`

### 06-08. DHCC B49 Clinic
- **Images**: `img-055.png` (643KB, Clinic), `img-062.jpg` (Office), `img-065.jpg` (Manager)
- **Website Dest**: `src/app/work/dhcc-b49-clinic`

### 09. Living and Dining Area
- **Images**: `img-066.jpg`, `img-073.png` (1.9MB - Huge, likely main view)
- **Website Dest**: `src/app/work/living-dining-area`

### 10. Discovery Gardens Beauty Salon
- **Images**: `img-078.png` (1.1MB)
- **Website Dest**: `src/app/work/discovery-gardens-salon`

### 11. Badr Airlines Office
- **Images**: `img-079.png` (997KB)
- **Website Dest**: `src/app/work/badr-airlines-office`

## Page 20: Contact
- **Context**: Final call to action.
- **Images**: `img-083.jpg` (610KB), `img-082.jpg`
- **Website Dest**: `src/app/contact/page.tsx`

## Visual Style Rules (Inferred from PDF)
1.  **Full Bleed**: Hero images are full width, often full height.
2.  **Typography**: Serif headings (Cormorant), Sans-serif body (Inter).
3.  **Color**: Deep Emerald backgrounds for transition slides.
4.  **Layout**: Clean, not cluttered. One major image per view.

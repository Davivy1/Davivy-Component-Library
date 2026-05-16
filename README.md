# Davivy Component Library

A reusable React component library built for the Davivy luxury perfume brand. Built as part of a Frontend Developer Internship Task 2.

**Live Demo:** [Add deployed link here]

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Component-based UI |
| Vite | Build tool and dev server |
| CSS3 | Component styling |
| JavaScript | Logic and interactivity |

---

## Project Structure

```
src/
  components/
    Button.jsx
    FeatureCard.jsx
    TestimonialCard.jsx
    Navbar.jsx
    Modal.jsx
    ContactForm.jsx
  App.jsx
  App.css
```

---

## Components

### Button
```jsx
<Button label="Shop Now" variant="primary" size="large" />
```
| Prop | Type | Description |
|------|------|-------------|
| label | string | Button text |
| variant | string | "primary" or "ghost" |
| size | string | "large" or leave empty |
| onClick | function | Click handler |

---

### FeatureCard
```jsx
<FeatureCard icon={<svg/>} title="Premium Ingredients" text="Description" />
```
| Prop | Type | Description |
|------|------|-------------|
| icon | JSX | SVG icon element |
| title | string | Card heading |
| text | string | Card description |

---

### TestimonialCard
```jsx
<TestimonialCard stars="★★★★★" text="Great product!" initials="SA" name="Sarah" role="Blogger" />
```
| Prop | Type | Description |
|------|------|-------------|
| stars | string | Star rating |
| text | string | Review text |
| initials | string | Avatar initials |
| name | string | Reviewer name |
| role | string | Reviewer role |

---

### Navbar
```jsx
<Navbar />
```
No props — handles scroll effect and mobile hamburger menu internally using React state.

---

### Modal
```jsx
<Modal buttonLabel="Open Modal" />
```
| Prop | Type | Description |
|------|------|-------------|
| buttonLabel | string | Trigger button text |

---

### ContactForm
```jsx
<ContactForm />
```
No props — manages form state internally. Displays personalised success message on submit.

---

## Setup

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

---

**Built by David Ibekwe**
# Scout 1 Prototype

A rapid prototyping project exploring the transition from traditional search to conversational AI experiences.

## 🎯 Purpose

Scout 1 investigates how to move users from constrained chatbot experiences to integrated conversational search. The goal is to create assistive experiences that complement existing websites rather than replace them.

## 🚀 Quick Start

### Prerequisites
- Node.js (Latest LTS)
- npm

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Visit: http://localhost:3000
```

## 📁 Project Structure

```
/scout_1
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── core/            # search and transition components
│   │   └── shared/          # reusable prototype components
│   ├── features/            # transition prototypes
│   │   ├── search-to-suggestions/  # basic search → suggestions
│   │   ├── suggestions-to-conversation/  # suggestions → conversation
│   │   └── full-conversation/  # complete conversational experience
│   ├── app/                 # Next.js routes
│   └── data/                # mock conversational content
├── public/
│   └── assets/              # images, icons, etc.
└── docs/                    # lightweight documentation
```

## 🎨 Prototype Features

### Phase 1: Search → Suggestions ✅
- Progressive search input enhancement
- Expandable suggestion panels
- Smooth transition animations
- **Status:** Ready for testing

### Phase 2: Suggestions → Conversation  
- Full conversational interface
- State management for transitions
- Entry/exit interaction patterns
- **Status:** Coming soon

### Phase 3: Full Experience
- Complete conversational search
- Integration testing
- Performance optimization
- **Status:** Coming soon

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Language:** TypeScript
- **Icons:** Lucide React

## 📊 Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Lint
npm run lint
```

## 🎯 Success Criteria

- **Transition Clarity:** Users understand search → suggestions → conversation
- **Seamless Experience:** No jarring jumps between interaction modes  
- **Complementary Feel:** Enhances rather than replaces website browsing
- **Stakeholder Feedback:** Positive reactions to concept demonstrations

## 📝 Documentation

- [Prototype Guide](./PROTOTYPE_GUIDE.md) - How to navigate and test each transition
- [Concept Notes](./CONCEPT_NOTES.md) - Key insights and stakeholder feedback

---

**Note:** This is a rapid prototyping project for internal concept validation. Focus is on speed and stakeholder feedback, not production-ready code.

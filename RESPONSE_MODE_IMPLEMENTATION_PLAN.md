# Response Mode Implementation Plan

## 🎯 Overview
Implementation plan for the Response Mode feature that adds Ticker and Ask discovery modes to the Scout conversational search prototype. This feature enables users to toggle between stock-focused and Q&A-focused interactions within the panel interface.

## 📋 Feature Requirements

### Core Functionality
- **Mode Toggle:** Tab component in panel input area (Ticker/Ask)
- **Three Panel States:** Overview, Suggest, Conversation
- **Reactive Content:** Real-time updates based on user input
- **State Transitions:** Smooth animations between states and modes

### Mode-Specific Behavior
- **Ticker Mode (Default):** Stock symbol search, price data, news & events
- **Ask Mode:** Question suggestions, dynamic answers, related resources

## 🏗️ Architecture Plan

### 1. State Management

**Panel States:**
```typescript
type PanelState = 'overview' | 'suggest' | 'conversation';
type ResponseMode = 'ticker' | 'ask';
```

**State Transitions:**
```
Overview → Suggest (on input focus/typing)
Suggest → Conversation (on Enter/selection)
Any state → Overview (on mode switch)
```

**State Flow:**
- Mode switch clears all data and resets to overview
- Input triggers suggest state with reactive content
- Selection/Enter transitions to conversation state

### 2. Component Architecture

**Panel-Level Components:**
- `SuggestPanel` - Main container for suggest state
- `ThreeColumnGrid` - Responsive grid layout controller
- `ModeToggle` - Tab component (already exists in enhancedInput)

**Column-Specific Components:**

**Ticker Mode:**
- `TickerSuggestions` - Symbol list with company names
- `SimpleQuote` - Price, change, buy/sell buttons
- `NewsAndEvents` - News headlines and events

**Ask Mode:**
- `AskSuggestions` - Question suggestions as pills
- `AnswerDisplay` - Dynamic answer content
- `Resources` - Related documents/videos

**Shared Components:**
- `SuggestionItem` - Reusable suggestion component
- `ResourceItem` - Document/video resource component

### 3. Data Architecture

**Mock Data Structure:**
```typescript
// Ticker data
interface TickerData {
  symbol: string;
  companyName: string;
  exchange: string;
  price: number;
  change: number;
  changePercent: number;
  news: NewsItem[];
  events: EventItem[];
}

// Ask data
interface AskData {
  suggestions: string[];
  answer: string;
  resources: ResourceItem[];
}

// News and Events
interface NewsItem {
  headline: string;
  source: string;
  timeAgo: string;
}

interface EventItem {
  type: string;
  description: string;
  date: string;
}

interface ResourceItem {
  title: string;
  type: 'document' | 'video';
  icon: string;
}
```

**Data Flow:**
- Input keystrokes → Filter/update relevant column data
- Mode switch → Clear all data, reset to overview
- Selection/Enter → Transition to conversation state

### 4. Animation Strategy

**Transition Types:**
- **Mode Switch:** Fade out current content → Fade in overview
- **State Transitions:** Slide up/down with opacity changes
- **Content Updates:** Subtle fade transitions for reactive content
- **Column Updates:** Staggered fade-in for new content

## 📊 Implementation Phases

### Phase 1: Foundation ✅
- [x] Review existing panel state management
- [x] Extend existing panel state management
- [x] Create mode switching logic
- [x] Implement basic three-column grid
- [x] Set up mock data structure

### Phase 2: Ticker Mode ✅
- [x] Build ticker-specific components
- [x] Create mock stock data (10-20 realistic tickers)
- [x] Implement reactive filtering
- [x] Add price/change display logic

### Phase 3: Ask Mode ⏳
- [ ] Build ask-specific components
- [ ] Create mock Q&A data
- [ ] Implement reactive filtering
- [ ] Add answer display logic

### Phase 4: Polish ⏳
- [ ] Add animations and transitions
- [ ] Optimize performance
- [ ] Test state transitions
- [ ] Final UI/UX refinements

## 🎨 UI/UX Specifications

### Layout Structure
- **Three-column responsive grid** (same as Overview state)
- **Input area at bottom** with integrated mode toggle
- **Consistent header** with Scout branding

### Ticker Mode Columns
1. **Suggestions:** Symbol + Company name + Exchange + Price + Change%
2. **Simple Quote:** Current price, change, buy/sell buttons, action icons
3. **News & Events:** News headlines, market events, ex-dividend dates

### Ask Mode Columns
1. **Suggestions:** Question pills (e.g., "How do I fund my account?")
2. **Answer:** Dynamic answer display area
3. **Resources:** Related documents and videos with icons

### Visual Design
- **Active tab:** Purple highlight (existing design)
- **Inactive tab:** Grayed out
- **Consistent spacing** and typography
- **Smooth transitions** between states

## 🔧 Technical Considerations

### Performance
- **Debounced input** (not critical for prototype)
- **Simple caching** for mock data
- **Efficient re-renders** for reactive content

### Data Management
- **Static mock data** for prototype
- **Realistic stock symbols** (AAPL, MSFT, GOOGL, etc.)
- **Mixed market conditions** (some up, some down)

### State Persistence
- **No persistence** across sessions
- **Default to Ticker mode** on fresh load
- **Clear state** on mode switch

## ❓ Open Questions

### Input Handling
- [ ] Start reactive updates on first keystroke or minimum character count?
- [ ] Auto-fill input on suggestion click or immediate transition?

### Column Prioritization
- [ ] Prioritize certain columns when data is limited?
- [ ] Handle empty state gracefully?

### Error States
- [ ] Handle no-matches gracefully?
- [ ] Show loading states during transitions?

### Data Filtering
- [ ] Filter tickers by symbol, company name, or both?
- [ ] Match ask questions by keywords or full text?

## 📝 Development Notes

### Current Status
- Planning phase complete
- Phase 1: Foundation ✅ COMPLETE
- Phase 2: Ticker Mode ✅ COMPLETE
- Phase 3: Ask Mode ready to begin
- Existing structure analyzed and extended

### Key Findings from Analysis
- **Panel State Management:** Currently uses `showStockResponse` boolean for conversation state
- **Tab Component:** Already exists in `EnhancedInputV2` with Ticker/Ask tabs
- **Data Structure:** Well-defined stock data structure in `appleStockData.ts`
- **Layout:** Three-column grid already implemented for overview state
- **Input Handling:** `handleInputSubmit` function exists for processing input

### Next Steps
1. ✅ Review existing panel state management
2. Extend panel state management to include suggest state
3. Create mode switching logic that integrates with existing tab component
4. Implement suggest state with three-column grid
5. Set up mock data structure for both modes

### Dependencies
- Existing `EnhancedInputV2` component (has tab functionality)
- Existing `EnhancedSmartSuggestPanelV2` component (panel state management)
- Current `StockResponse` component (conversation state)
- Data structure from `appleStockData.ts`

---

**Last Updated:** [Current Date]
**Status:** Planning Complete - Ready for Implementation

# Design Guidelines: French Verb Conjugation Game

## Design Approach
**Reference-Based: Educational Gaming**
Drawing inspiration from Duolingo's playful learning interface, Kahoot's competitive energy, and French educational platforms like TV5MONDE. The design should feel encouraging, energetic, and celebration-focused to motivate language learning.

## Typography System
- **Primary Font**: Nunito (Google Fonts) - rounded, friendly, and highly legible
- **Hierarchy**:
  - Game titles/headers: 2xl to 4xl, bold (font-bold)
  - Verb displays: xl to 2xl, semibold - ensure excellent readability
  - UI labels/buttons: base to lg, medium
  - Instructions/feedback: sm to base, regular
- **Accent**: Use Poppins for numerical scores/timers (distinct, modern)

## Layout System
**Spacing Primitives**: Tailwind units of 3, 4, 6, 8, 12
- Consistent card padding: p-6
- Section spacing: gap-4 and gap-6 for grids
- Button spacing: px-8 py-3 for primary actions
- Screen margins: p-4 on mobile, p-8 on desktop

## Component Library

### Game Mode Cards (Homepage)
- Large clickable cards in 2-column grid (md:grid-cols-2)
- Each card shows: mode icon, title, brief description, "Jouer" button
- Subtle hover lift effect (transform)
- Rounded corners (rounded-xl)

### Verb Input Interface (Solo Mode)
- Large centered verb prompt with pronoun
- Grid of 6 input fields (je, tu, il/elle, nous, vous, ils/elles)
- "Vérifier" button below inputs
- Immediate visual feedback: checkmarks for correct, gentle shake for incorrect

### Memory Game Board
- 4x4 or 6x4 grid of cards
- Flip animation on click
- Matched pairs remain visible with success state
- Unmatched cards flip back after brief delay

### Kahoot Interface
- Question display with large verb/prompt
- 4 answer options in 2x2 grid with distinct button styles
- Progress bar showing question number
- Countdown timer (circular or linear bar)

### Multiplayer Lobby
- Room code display (large, centered, copyable)
- Player list showing joined participants
- "Iniciar Juego" button (host only)
- Waiting animation

### Leaderboard
- Ranked list with positions, player names, scores
- Podium visualization for top 3
- Current player highlighted

### Tense Selector
- Toggle buttons or checkbox group
- Visual indicator for selected tenses
- Positioned prominently before game start

### Feedback Components
- Success celebration: confetti burst, cheerful message
- Encouragement for errors: gentle, supportive messaging
- Score display: prominent numerical counter
- Streak indicator: fire icon with number

### Timer Visualizations
- Countdown: Large numbers with circular progress ring
- Urgency states: color shift as time runs low
- Pause/resume controls where applicable

## Navigation
- Persistent header with logo and "Salir" link
- Mode selection as main navigation hub
- Breadcrumb for sub-modes (e.g., "Solitario > Contrarreloj")

## Responsive Strategy
- Mobile-first: Single column, vertically stacked
- Tablet (md:): 2-column grids for cards/options
- Desktop (lg:): Wider containers (max-w-4xl to max-w-6xl)

## Animation Guidelines
**Use Strategically**:
- Card flips (Memory mode)
- Confetti/celebration on success
- Gentle shake for incorrect answers
- Timer countdown pulses
- Leaderboard position changes
- Avoid excessive motion - prioritize clarity

## Images
**Homepage Hero**: Include a vibrant, illustrative hero image showing a diverse group of students engaging with French learning, positioned at top of page with welcome message overlaid. Use subtle blur background for text legibility.

**Mode Cards**: Each game mode card should have a distinctive icon or small illustration (puzzle pieces for Memory, lightning bolt for timed modes, trophy for Kahoot)

No photographic images needed elsewhere - rely on iconography and illustration style.

## Special Considerations
- **Accessibility**: High contrast for verb text, keyboard navigation for all games
- **Feedback Immediacy**: Visual responses within 100ms of user action
- **Progress Persistence**: Visual indication of session stats
- **French Cultural Touches**: Subtle nods to French design aesthetics (refined, balanced, elegant even in playfulness)
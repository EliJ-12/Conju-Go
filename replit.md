# French Verb Conjugation Game (Conjugo)

## Overview

Conjugo is an interactive educational web application designed to help users learn French verb conjugations through engaging game modes. The application features multiple game types including solo practice, timed challenges, memory matching, and Kahoot-style quizzes with both single-player and multiplayer options. Built with React and Express, it provides a comprehensive platform for mastering French verb conjugations across different tenses (présent, passé composé, imparfait).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool

**Routing**: Wouter for client-side routing (lightweight alternative to React Router)

**State Management**: React hooks for local state, TanStack Query (React Query) for server state and data fetching

**UI Components**: Shadcn/ui component library built on Radix UI primitives with Tailwind CSS for styling

**Design System**:
- Typography: Nunito (primary font) and Poppins (for numerical displays) from Google Fonts
- Color scheme: Customizable via CSS variables supporting light/dark themes
- Component variants: Extensive use of class-variance-authority for component styling variations

**Key Features**:
- Five game modes with distinct UI patterns (Solo, Solo-Timed, Memory, Kahoot-Solo, Kahoot-Multi)
- Real-time multiplayer support via WebSocket connections
- Responsive design with mobile-first approach
- Visual feedback systems (confetti, animations, score displays)
- Theme toggle with localStorage persistence

### Backend Architecture

**Server Framework**: Express.js running on Node.js

**Build System**: esbuild for server bundling, Vite for client bundling

**API Design**: RESTful endpoints for verb data and conjugation checking, WebSocket for real-time multiplayer

**Key Endpoints**:
- `/api/verbs` - Retrieve all French verbs
- `/api/verbs/random` - Get random verb(s)
- `/api/verbs/:id` - Get specific verb by ID
- `/api/check-conjugation` - Validate conjugation attempts

**WebSocket Server**: 
- Room-based multiplayer system with game state synchronization
- Handles player connections, room creation/joining, question distribution, and answer validation
- In-memory storage for active game rooms and player states

**Development Features**:
- Hot Module Replacement (HMR) via Vite in development
- Request logging middleware
- Error handling with runtime error overlay in development

### Data Architecture

**Verb Data Structure**: Hardcoded dataset of 150+ French verbs stored in shared TypeScript module

**Verb Schema**:
- Infinitive form, translation (Spanish), verb type (regular/irregular)
- Verb group (1, 2, or 3), auxiliary verb (avoir/être), past participle
- Conjugations for three tenses with six pronouns each

**Game State Management**:
- Client-side state for solo modes
- Server-authoritative state for multiplayer mode
- Room-based storage using in-memory Map structures (MemStorage implementation)

**Schema Validation**: Zod schemas for runtime type validation, Drizzle-Zod integration for database schema validation

### External Dependencies

**UI Libraries**:
- Radix UI - Accessible, unstyled component primitives (accordion, dialog, dropdown, etc.)
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library

**State & Data Management**:
- TanStack Query v5 - Server state management and caching
- React Hook Form - Form state management with Zod validation

**Real-time Communication**:
- ws (WebSocket library) - Server-side WebSocket implementation
- Native WebSocket API - Client-side real-time communication

**Database & ORM**:
- Drizzle ORM - TypeScript ORM configured for PostgreSQL
- pg - PostgreSQL client (configured but database not currently used for verb data)
- connect-pg-simple - PostgreSQL session store (configured for future use)

**Build & Development**:
- Vite - Frontend build tool with HMR
- esbuild - Server bundling for production
- tsx - TypeScript execution for development
- Replit-specific plugins - Dev banner, cartographer, runtime error modal

**Utilities**:
- date-fns - Date manipulation
- nanoid - Unique ID generation for rooms/players
- clsx & tailwind-merge - Conditional CSS class handling
- class-variance-authority - Component variant management

**Type Safety**:
- Zod - Runtime schema validation
- TypeScript - Static type checking
- Drizzle-Zod - Database schema to Zod schema conversion

**Note**: The application is configured to use PostgreSQL via Drizzle ORM (see `drizzle.config.ts`), but currently all verb data and game state are managed in-memory. The database integration is prepared for future features like user accounts, progress tracking, or persistent leaderboards.
Chaos Crew Project Activities App

A dark-mode, React Native application built with Expo Router. The app displays team member profiles and provides an interactive 4x4 matrix tracker for team tasks and goals.


Features

Interactive Task Tracker**: A $4 \times 4$ task grid with dynamic state tracking and live completion counters (e.g., `2/4`).
Profile Navigation**: Team cards equipped with dynamic parameters (`name`, `role`, `bio`, etc.) passed via Expo Router to a detailed profile screen.




File Structure & Overview

File / Component | Type | Description |

 `HomeScreen.tsx` | Main Screen | Renders the primary dashboard containing team profiles and activity columns. |
 `/profile` | Route | Destination page that receives and displays detailed member data. |
 `assets/images/*` | Static Assets | Contains profile images (`jona.jpg`, `steven.jpg`, `cheeny.jpg`, `clint.jpg`). |


How It Works

1. Activity Matrix State

The task grid is backed by a 2D array of boolean values. Toggling a task updates the matrix state and recalculates the progress counter for that column:

```typescript
const [columns, setColumns] = useState([
  [false, false, false, false], // Column 1 (Jona)
  [false, false, false, false], // Column 2 (Steven)
  [false, false, false, false], // Column 3 (Cheeny)
  [false, false, false, false], // Column 4 (Clint)
]);



2. Navigation with Parameters

When a profile button is pressed, Expo Router passes team details directly to the `/profile` route:

```typescript
router.push({
  pathname: '/profile',
  params: { name: 'Jona Mae Cabusas', role: 'Leader', ... }
});

```

---

Tech Stack

Framework**: React Native / Expo (Expo Router)
Language**: TypeScript
Styling**: `StyleSheet` 



Chaos Crew Project Activities Application

An interactive cross-platform mobile screen built using **React Native**, **Expo**, and **Expo Router**. The application features a dark glassmorphic dashboard (`index.tsx`) displaying team member profile action cards alongside an interactive project activity matrix. Clicking any member card navigates seamlessly to a detailed individual profile view (`profile.tsx`) with data passed directly through route search parameters.



Key Features

1. Interactive $4 \times 4$ Task Tracking Matrix** (`index.tsx`)

State-Driven Checkboxes**: Uses React's `useState` hook to maintain a 2D boolean array representing task states.


Live Progress Counters**: Automatically calculates and updates the checked task ratio per column (e.g., `0/4`, `1/4`).


Activity Logger**: Keeps track of active checked tasks via `checkedActivities` state and logs updates in the console via `useEffect`.


4 Distinct Member Activity Columns**: Pre-configured task lists covering setup, styling, profile design, and container alignments.



2. **Dynamic Member Profile Route** (`profile.tsx`)

Route Parameter Integration**: Uses `useLocalSearchParams()` to dynamically populate profile details (`name`, `role`, `bio`, `love`, `fun`, `email`, `image`).


Side-by-Side Detail View**: Arranges profile picture and text info in a flexible row view (`flexDirection: 'row'`).


Two-Column Highlight Cards**: Displays "Things I Love" and "Fun Facts" in customized grid boxes.


Contact & Navigation**: Features a styled email banner and a direct `router.back()` button to return to the main dashboard.



3. **Dark Glassmorphic UI/UX**

* Styling constructed with custom translucency (`rgba` colors) to deliver a modern, dark-theme glass aesthetic across both screens.


* Positioned header badges, custom border glows, and crisp typography.



---

## 📁 File & Project Structure

```text
├── assets/
│   └── images/
│       ├── jona.jpg        # Profile image asset
│       ├── steven.jpg      # Profile image asset
│       ├── cheeny.jpg      # Profile image asset
│       └── clint.jpg       # Profile image asset
├── app/
│   ├── index.tsx           # Home Screen (Dashboard & 4x4 Activity Matrix)
│   └── profile.tsx         # Member Profile Detail Screen

```

---

## 👥 Team Members & Initial Data Setup

The dashboard hosts custom profiles and tasks for 4 team members:

| Team Member | Role | Route `image` key | Email Banner |
| --- | --- | --- | --- |
| **Jona Mae Cabusas**<br> | Leader

 | `jona`<br> | `jona.mae.cabusas@chaoscrew.com`<br> |
| **Cheeny Mae Tito**<br> | Member

 | `cheeny`<br> | `cheeny.mae.tito@chaoscrew.com`<br> |
| **Steven Lee Dave Armecin**<br> | Member

 | `steven`<br> | `steven.lee.dave.armecin@chaoscrew.com`<br> |
| **Clint Harold Barriga**<br> | Member

 | `clint`<br> | `clint.harold.barriga@chaoscrew.com`<br> |

---

## 🛠 Tech Stack

* **Core Framework**: React Native (with Expo)


* **Navigation Router**: Expo Router (`router.push`, `router.back`, `useLocalSearchParams`)


* **Language**: TypeScript (`.tsx`)


* **UI Components**: `View`, `Text`, `Image`, `Button`, `Pressable`, `ScrollView`

* **Styling**: React Native `StyleSheet`


---

## 💻 Code Architecture Highlights

### Passing Data via Route Params (`index.tsx`)

```typescript
router.push({
  pathname: '/profile',
  params: {
    image: 'jona',
    name: 'Jona Mae Cabusas',
    role: 'Leader',
    bio: 'Leader kunuhay nga nagapanguna sa Chaos Crew project.😁',
    love: 'Kdrama binge watching and singing',
    fun: 'My ultimate rest day formula involves a fresh cup of coffee...',
    email: 'jona.mae.cabusas@chaoscrew.com',
  },
});
```[cite: 2]

### Consuming Params Dynamically (`profile.tsx`)
```typescript
const { name, role, bio, love, fun, email, image } = useLocalSearchParams();

// Dynamic local image lookup
<Image
  source={profileImages[(Array.isArray(image) ? image[0] : image) as keyof typeof profileImages]}
  style={styles.avatarImage}
/>
```[cite: 1]

```

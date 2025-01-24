# Comic App

it's a Next.js-based web application designed to showcase and explore a collection of anime and comics. Users can browse, like, and manage their favorite items while enjoying a responsive and interactive user interface.

## Features

- **Explore Anime:** A homepage that highlights the purpose and theme of the application.
- **Dynamic Content Management:** Add, like, and delete items from the user's personalized list.
- **Responsive Design:** Ensures optimal user experience across various devices.
- **Routing:** Dynamic routes for item details using Next.js.

## Tech Stack

- **Frontend:** Next.js, React
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Image Handling:** Next.js Image component

## File Structure

### Components
- **MainHeader:**
  - Navigation bar with links to the homepage, liked items, and other sections.

- **DisplayItems:**
  - Renders a grid of available items with images and titles, linking to their details.

- **DeleteItem:**
  - Provides functionality to delete an item from the personalized list.

- **LikeButton:**
  - Allows users to like and add items to their personal list.

### Pages
- **Home Page:**
  - Includes a call-to-action section encouraging users to explore anime.

- **AllItems:**
  - Displays the feed of items dynamically using the `DisplayItems` component.

- **Item Details:**
  - A dynamic route page that showcases detailed information about a selected item, including an image, title, and bio, with a like button.

- **Liked Items:**
  - Lists all liked items with options to view details and delete.

### Context
- **Content Context:**
  - Manages the application's global state for storing the liked items and ensures seamless interaction across components.

## How to Run the Project

### Prerequisites
- Node.js installed
- Basic knowledge of React and Next.js

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd comic-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Key Functionalities

1. **Homepage:**
   - Displays the title, subtitle, and a button to navigate to the feed of all items.

2. **Dynamic Item Listing:**
   - Fetches and displays items dynamically using the `ArrItems` array.

3. **Item Details:**
   - Shows a detailed view of a selected item with a "Like" button functionality.

4. **Liking Items:**
   - Adds an item to the user's list, ensuring duplicates are not allowed.

5. **Deleting Items:**
   - Removes an item from the personalized list using the `DeleteItem` component.

## Code Highlights

### Content Context
- Provides global state management using React Context API:
  ```jsx
  const ContentContext = createContext();

  export const ContentProvider = ({ children }) => {
      const [contentArray, setContentArray] = useState([]);

      return (
          <ContentContext.Provider value={{ contentArray, setContentArray }}>
              {children}
          </ContentContext.Provider>
      );
  };

  export default useContent;
  ```

### Dynamic Routing
- Next.js dynamic route for displaying item details:
  ```jsx
  const Page = ({ params }) => {
    const data = params.slug;

    const newList = ArrItems.find(
      (item) => String(item.id).trim().toLowerCase() === data.trim().toLowerCase()
    );

    return (
      <div>{newList ? (<p>{newList.title}</p>) : (<p>No items found</p>)}</div>
    );
  };

  export default Page;
  ```

## Future Enhancements

- Add user authentication to save personalized lists persistently.
- Integrate a backend API for dynamic data fetching.
- Implement search and filter functionality for items.
- Enhance the design with animations and additional interactive elements.

- ##Go to Live:
 https://next-js-comic-app.vercel.app/


import StartingPage from "./Pages/StartingPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import FinalResume from "./Pages/FinalResume";
import PersonalPage from "./Pages/PersonalPage";

const dataChangeHandler = (event) => {
  console.log(event);
};
const router = createBrowserRouter([
  { path: "/", element: <StartingPage></StartingPage> },

  {
    path: "/personal",
    element: <PersonalPage data={dataChangeHandler}></PersonalPage>,
  },
  { path: "/experience", element: <ExperiencePage></ExperiencePage> },
  { path: "/education", element: <EducationPage></EducationPage> },
  { path: "/final-resume", element: <FinalResume></FinalResume> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

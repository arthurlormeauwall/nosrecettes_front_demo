import { Outlet, Route, Routes } from "react-router"
import ShoppingList from "../pages/ShoppingList"
import { EditRecipePage } from "../pages/EditRecipePage"
import ItemPage from "../pages/ItemPage"
import MenuPage from "../pages/MenuPage"
import RecipesPage from "../pages/RecipesPage"


export const HomeRouting = () => {
  return <Routes >
    <Route element={<Outlet />}>
      <Route path="/" element={<ShoppingList />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/recipes" element={<RecipesPage />} />

      <Route path="/recipes/edit/:id" element={<EditRecipePage />} />

      <Route path="/item/*" element={<ItemPage />} />
    </Route>
  </Routes>
}

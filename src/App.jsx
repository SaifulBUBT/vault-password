import BookmarkForm from "./components/BookmarkForm";
import CredentialGrid from "./components/CredentialGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <>
      <Header />

      <div class="max-w-7xl mx-auto mt-8 px-4">
        <BookmarkForm />
      </div>

      <main class="p-8">
        <div class="max-w-7xl mx-auto space-y-10 px-4">
          <SearchBar />
          <CredentialGrid />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

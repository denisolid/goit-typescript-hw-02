import { useEffect, useState, FormEvent } from "react";
import "./App.css";
import { fetchData } from "./services/api";
import Keys from "./services/ApiKEY.json";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import { MutatingDots } from "react-loader-spinner";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string | null;
}

interface Response {
  total: number;
  total_pages: number;
  results: Image[];
}

const App: React.FC = () => {
  const notify = (message: string) => toast.error(message);

  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [modalUrls, setModalUrls] = useState<string>("");
  const [alt, setAlt] = useState<string>("");
  const [modalIsOpened, setModalIsOpened] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const search = form.query.value;
    if (!search) {
      return notify("Please enter query");
    }
    setQuery(search);
    setImages([]);
    setLoading(true);
    setError(false);
    form.reset();
  };

  useEffect(() => {
    if (query) {
      const ApiKey = Keys.ApiKey;

      const fetchDatas = async () => {
        try {
          setError(false);
          const res = await fetchData(ApiKey, query, page);
          setImages((prev) => [...prev, ...res.results]);
          setIsVisible(false);
          if (page < res.total_pages) {
            setIsVisible(true);
          }
        } catch (error) {
          setIsVisible(false);
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchDatas();
    }
  }, [query, page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (alt: string, modalUrls: string) => {
    setModalIsOpened(true);
    setAlt(alt);
    setModalUrls(modalUrls);
  };

  const closeModal = () => {
    setModalIsOpened(false);
    setAlt("");
    setModalUrls("");
  };

  return (
    <div>
      Gallery
      <SearchBar handleSubmit={handleSubmit} />
      <Toaster />
      {loading && (
        <MutatingDots
          visible={true}
          height="80"
          width="80"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && notify("Please try again...")}
      <ImageGallery
        images={images}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isVisible && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal
        openModal={modalIsOpened}
        closeModal={closeModal}
        modalUrls={modalUrls}
        alt={alt}
      />
    </div>
  );
};

export default App;

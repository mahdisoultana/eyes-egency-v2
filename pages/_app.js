import "../styles/globals.css";
import NextProgress from "next-progress";
import { useState, useEffect } from "react";
import { getAllPostsFromServer } from "../utils/utilsFn";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient } from "react-query";
import ReactGA from "react-ga";

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([]);
  const client = new QueryClient();
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      ReactGA.initialize("G-R049CG0TWJ");
      ReactGA.pageview(window.location.pathname + window.location.search);
      (async function () {
        const postsFromServer = await getAllPostsFromServer();
        setPosts(postsFromServer);
      })();
    }

    return () => (mounted = false);
  }, []);

  const router = useRouter();
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <QueryClientProvider client={client}>
        <ToastContainer />
        <NextProgress
          color="#FACC15"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />{" "}
        <Component {...pageProps} posts={posts} />
      </QueryClientProvider>
    </AnimatePresence>
  );
}

export default MyApp;

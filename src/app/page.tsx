import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";
import TopAppBar from "./components/TopAppBar";

export default function Homepage() {
  return (
    <div className={styles.page}>
      <TopAppBar />
      <ProductCard />
    </div>
  );
}

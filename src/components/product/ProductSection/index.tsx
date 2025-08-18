import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.scss";
import ProductCard from "@/components/product/ProductCard";

type Installment = {
  quantity: number;
  value: number;
  text?: string;
  rate?: number;
};

type Product = {
  id: string | number;
  title: string;
  imageUrl: string;
  oldPrice?: number;
  price: number;
  installment?: Installment;
  shippingBadge?: string;
  category?: string;
};

const TABS = [
  { label: "CELULAR", slug: "celular" },
  { label: "ACESSÓRIOS", slug: "acessorios" },
  { label: "TABLETS", slug: "tablets" },
  { label: "NOTEBOOKS", slug: "notebooks" },
  { label: "TVS", slug: "tvs" },
  { label: "VER TODOS", slug: "all" },
];

type Props = {
  id?: string;
  columns?: number;
  products?: Product[];
  initialTab?: string;
  isLoading?: boolean;
};

export default function ProductSection({
  id,
  columns = 4,
  products,
  initialTab = "celular",
  isLoading = false,
}: Props) {
  const [active, setActive] = useState(initialTab);
  const [list, setList] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (products && products.length > 0) {
      // adiciona categorias manualmente se estiverem faltando
      const withCategories = products.map((p) => ({
        ...p,
        category: categorize(p.title),
      }));
      setList(withCategories);
      setError(null);
    } else if (!isLoading && (!products || products.length === 0)) {
      setError("Não foi possível carregar os produtos.");
    }
  }, [products, isLoading]);

  const filtered = useMemo(() => {
    if (active === "all") return list;
    const slug = active.toLowerCase();
    return list.filter((p) =>
      p.category ? p.category.includes(slug) : true
    );
  }, [list, active]);

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <h3 id={`${id}-heading`} className={styles.heading}>Produtos relacionados</h3>

      <div role="tablist" aria-label="Categorias" className={styles.tabs}>
        {TABS.map(t => (
          <button
            key={t.slug}
            role="tab"
            aria-selected={active === t.slug}
            className={`${styles.tab} ${active === t.slug ? styles.active : ""}`}
            onClick={() => setActive(t.slug)}
            type="button"
          >
            {t.label}
          </button>
        ))}
      </div>

      {isLoading && <div className={styles.state}>Carregando…</div>}
      {error && !isLoading && <div className={styles.stateError}>{error}</div>}

      {!isLoading && !error && (
        <div
          className={styles.grid}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))` }}
          role="list"
        >
          {filtered.slice(0, 8).map(p => (
            <div role="listitem" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// 👇 Função auxiliar que categoriza pelo título do produto
function categorize(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("tv")) return "tvs";
  if (lower.includes("notebook")) return "notebooks";
  if (lower.includes("tablet")) return "tablets";
  if (lower.includes("fone") || lower.includes("acess") || lower.includes("caixa"))
    return "acessorios";
  if (
    lower.includes("celular") ||
    lower.includes("iphone") ||
    lower.includes("galaxy") ||
    lower.includes("smartphone")
  )
    return "celular";
  return "outros";
}

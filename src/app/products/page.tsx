import DesktopProductsPage from "@/components/DesktopProductsPage";
import MobileProductsPage from "@/components/MobileProductsPage";

export default function ProductsPage() {
  return (
    <>
      <div className="md:hidden">
        <MobileProductsPage />
      </div>

      <div className="hidden md:block">
        <DesktopProductsPage />
      </div>
    </>
  );
}
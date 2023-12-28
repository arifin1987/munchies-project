import Product from "@/components/Products/Product";
import Image from "next/image";

export const metadata = {
  title: "Munchies | Home",
  description: "Home Page",
};
export default function Home() {
  return (
    <div>
      <Product></Product>
    </div>
  );
}

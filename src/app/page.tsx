import Image from "next/image";
import ProductCard from "../components/ProductCard";


const Homepage = async ({ searchParams }: { searhParams: Promise<{ category: string }> }) => {

  const category = (await searchParams).category;

  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Homepage" fill />
      </div>
      <ProductCard category={category} params="homepage" />
    </div>
  )
}

export default Homepage
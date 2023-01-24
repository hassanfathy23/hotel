import CardItem from "./CardItem";

export default function CardsList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 md:-translate-y-[135px] ">
      <CardItem
        icon="teenyicons:cup-solid"
        header="RESTAURANT"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do"
        shadow
      />
      <CardItem
        icon="map:spa"
        header="SPA & WELLNESS"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do"
      />
      <CardItem
        icon="cil:plant"
        header="THE BEST ROOMS"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do"
      />
      <CardItem
        icon="cil:drink-alcohol"
        header="LOUNGE BAR"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do"
      />
    </div>
  );
}

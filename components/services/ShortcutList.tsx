import ShortcutItem from "./ShortcutItem";

export default function ShortcutList() {
  return (
    <div className="w-full md:w-[840px] mx-auto flex flex-row flex-wrap gap-4 md:gap-0 justify-between items-center">
      <ShortcutItem
        content="Welcome Drinks"
        icon="fluent:drink-to-go-24-regular"
      />
      <ShortcutItem
        content="Car Rental"
        icon="material-symbols:directions-car-outline" 
      />
      <ShortcutItem
        content="Resort & Spa"
        icon="map:spa"
      />
      <ShortcutItem
        content="Free WIFI"
        icon="material-symbols:wifi-rounded"
      />
    </div>
  );
}

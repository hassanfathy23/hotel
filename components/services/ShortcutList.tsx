import ShortcutItem from "./ShortcutItem";

export default function ShortcutList() {
  return (
    <div className="w-[840px] px-40 mx-auto flex flex-row justify-between items-center">
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

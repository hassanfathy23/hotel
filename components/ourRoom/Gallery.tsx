import GalleryItem from "./GalleryItem";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 justify-items-center md:justify-items-center">
      <GalleryItem
        image="/images/Rectangle 3677.png"
        numberOfGuests={3}
        header="Room With View"
      />
      <GalleryItem
        image="/images/Rectangle 3678.png"
        numberOfGuests={3}
        header="Luxury Room"
        full
      />
      <GalleryItem
        image="/images/Rectangle 3679.png"
        numberOfGuests={3}
        header="Appartment"
      />
      <GalleryItem
        image="/images/Rectangle 3677 (1).png"
        numberOfGuests={3}
        header="Small Room"
      />
      <GalleryItem
        image="/images/Rectangle 3679 (1).png"
        numberOfGuests={3}
        header="Medium Room"
      />
    </div>
  );
}

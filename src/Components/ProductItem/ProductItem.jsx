const ProductItem = ({ singleProductTile }) => {
  return (
    <div className="relative group border border-cyan-700 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleProductTile?.thumbnail}
          alt=""
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold ">
          <p>{singleProductTile?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import { useRouter } from "expo-router";
import ImageBackgroundInfo from "@/src/components/ImageBackgroundInfo";
import { useStore } from "@/src/store/store";

const ImageSection = ({ ItemOfIndex }: any) => {
  const router = useRouter();
  const BackHandler = () => {
    router.back();
  };

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <ImageBackgroundInfo
      EnableBackHandler={true}
      imagelink_portrait={ItemOfIndex.imagelink_portrait}
      type={ItemOfIndex.type}
      id={ItemOfIndex.id}
      favourite={ItemOfIndex.favourite}
      name={ItemOfIndex.name}
      special_ingredient={ItemOfIndex.special_ingredient}
      ingredients={ItemOfIndex.ingredients}
      average_rating={ItemOfIndex.average_rating}
      ratings_count={ItemOfIndex.ratings_count}
      roasted={ItemOfIndex.roasted}
      BackHandler={BackHandler}
      ToggleFavourite={ToggleFavourite}
    />
  );
};

export default ImageSection;

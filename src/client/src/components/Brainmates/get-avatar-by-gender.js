import avatarMale from "../../images/avatar_male.png";
import avatarFemale from "../../images/avatar_female.png";
import avatarOther from "../../images/avatar_other.png";


export const getAvatarByGender = (gender) => {
  let mateAvatar;
    if (gender === "male") {
      mateAvatar = avatarMale;
    } else if (gender === "female") {
      mateAvatar = avatarFemale;
    } else {
      mateAvatar = avatarOther;
    }
  return mateAvatar;
}

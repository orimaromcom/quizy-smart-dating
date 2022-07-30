import style from "./profile.module.css";
import {
  Box,
  TextField,
  Slider,
  Switch,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function Profile({ profile, fetcProfile, updateProfile }) {
  const [edit, setEdit] = useState(false);
  const [profileObj, setProfileObj] = useState(profile);

  useEffect(() => {
    if (!profile.id) fetcProfile(1);
  }, []);

  useEffect(() => {
    setProfileObj(profile);
  }, [profile]);

  const handleChange = (event) => {
    setProfileObj({ ...profileObj, [event.target.id]: event.target.value });
  };

  const handlePrefrencesRangeChange = (event) => {
    console.log(event.target.value);
    setProfileObj({
      ...profileObj,
      ["prefrences"]: {
        ...profileObj.prefrences,
        minAge: event.target.value[0],
        maxAge: event.target.value[1],
      },
    });
  };

  return profile.id ? (
    <div className={style.profile_container}>
      <div className={style.profile_top_container}>
        <div className={style.profile_picture_container}>
          <img
            className={style.profile_picture}
            src={profileObj.picture}
            alt="profile-picture"
          />
        </div>
        <h1>{profileObj.email}</h1>
      </div>
      <div className={style.info_container}>
        <Box className={style.info_field_container}>
          <TextField
            disabled={!edit}
            label="User Name"
            id="userName"
            value={profileObj.userName || ""}
            onChange={handleChange}
          />
        </Box>
        <Box className={style.info_field_container}>
          <TextField
            disabled={!edit}
            label="Age"
            id="age"
            value={profileObj.age || ""}
            onChange={handleChange}
          />
        </Box>
        <Box className={style.info_field_container}>
          <TextField
            disabled={!edit}
            label="Phone Number"
            id="phone"
            value={profileObj.phone || ""}
            onChange={handleChange}
          />
        </Box>
        <Box className={style.info_field_container}>
          <TextField
            disabled={!edit}
            label="Location"
            id="location"
            value={profileObj.location || ""}
            onChange={handleChange}
          />
        </Box>
      </div>
      <div className={style.prefrences_container}>
        <Box className={style.pref_field_container}>
          <h1>Mate type</h1>
          <span className={style.rel_pref}>
            <h2>Friendly</h2>
            <Switch color="primary" defaultChecked disabled={!edit} />
            <h2>Romantic</h2>
          </span>
        </Box>
        <Box className={style.pref_field_container}>
          <h1>Mate Age</h1>
          <span className={style.pref_age_label}>
            {profileObj.prefrences.minAge + "-" + profileObj.prefrences.maxAge}
          </span>
          <span className={style.pref_age_slider_container}>
            <h2>{18}</h2>
            <Slider
              disabled={!edit}
              className={style.pref_age_slider}
              value={
                [
                  profileObj.prefrences.minAge,
                  profileObj.prefrences.maxAge,
                ] || [20, 45]
              }
              onChange={handlePrefrencesRangeChange}
              valueLabelDisplay="auto"
              min={18}
            />
            <h2>100</h2>
          </span>
        </Box>
        <Box className={style.pref_field_container}>
          <h1>Mate Gender</h1>
          <Select
            disabled={!edit}
            className={style.pref_gender_select}
            id="gender"
            value={profileObj.prefrences.gender || ""}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"all"}>All</MenuItem>
          </Select>
        </Box>
      </div>
      {edit ? (
        <div className={style.save_cancel_btn_container}>
          <Button
            variant="contained"
            onClick={() => {
              //todo: send new info
              setEdit(false);
            }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              setProfileObj(profile);
              setEdit(false);
            }}
          >
            Cencel
          </Button>
        </div>
      ) : (
        <div className={style.save_cancel_btn_container}>
          <Button
            variant="contained"
            onClick={() => {
              setEdit(true);
            }}
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  ) : null;
}

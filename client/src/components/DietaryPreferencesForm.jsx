// src/components/DietaryPreferencesForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMsg } from "./common/ErrorMsg";
import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";
import { CheckBoxTag } from "./common/CheckBoxTag";

export const DietaryPreferencesForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.log("Food Intake Submitted:", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title={"Dietary Preferences"} />

        <SelectTag
          register={register}
          registerName={"dietType"}
          requiredStatus={true}
          options={[
            { value: "vegetarian", label: "Vegetarian" },
            { value: "nonVeg", label: "Non-Vegetarian (more than 2 days a week)" },
            { value: "vegan", label: "Vegan" },
            { value: "glutenFree", label: "Gluten Free" },
            { value: "lactoseFree", label: "Lactose Free" },
            { value: "eggetarian", label: "Eggetarian" },
          ]}
          error={errors?.dietType}
          defaultText={"Are you?"}
        />

        <label>
          Do you tend to skip meals?
          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>
          <div style={{ marginLeft: "0.5rem" }}>
            <CheckBoxTag label={"Breakfast"} register={register} registerName={"mealsSkipped"} value={"breakfast"} />
            <CheckBoxTag label={"Lunch"} register={register} registerName={"mealsSkipped"} value={"lunch"} />
            <CheckBoxTag label={"Dinner"} register={register} registerName={"mealsSkipped"} value={"dinner"} />
          </div>
        </label>

        {/* <SelectTag
          register={register}
          registerName={"compensatoryEater"}
          requiredStatus={true}
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "not_sure", label: "Not Sure" }]}
          error={errors?.compensatoryEater}
          defaultText={"Are you a compensatory eater?"}
        /> */}

        <SelectTag
          register={register}
          registerName={"tvEater"}
          requiredStatus={true}
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "sometimes", label: "Sometimes" }]}
          error={errors?.tvEater}
          defaultText={"Are you a TV-eater? PENDING-CHANGE"}
        />

        <SelectTag
          register={register}
          registerName={"dinnerSleepGap"}
          requiredStatus={true}
          options={[{ value: "1_2hrs", label: "1-2 hours" }, { value: "below_1hr", label: "Below 1 hour" }, { value: "no_gap", label: "I sleep immediately after dinner" },]}
          error={errors?.dinnerSleepGap}
          defaultText={"Gap between dinner and sleep:?"}
        />

        <SelectTag
          register={register}
          registerName="fruitFrequency"
          requiredStatus={true}
          options={[
            { value: "once", label: "Once a week" },
            { value: "twice", label: "Twice a week" },
            { value: "more_than_three", label: "More than 3 times a week" },
            { value: "rarely", label: "Not really / Sometimes" },
          ]}
          error={errors?.fruitFrequency}
          defaultText="How often do you eat fruits?"
        />

        <SelectTag
          register={register}
          registerName="greensFrequency"
          requiredStatus={true}
          options={[
            { value: "once", label: "Once a week" },
            { value: "twice", label: "Twice a week" },
            { value: "more_than_three", label: "More than 3 times a week" },
            { value: "rarely", label: "Not really / Sometimes" },
          ]}
          error={errors?.greensFrequency}
          defaultText="How often do you eat green vegetables?"
        />

        <SelectTag
          register={register}
          registerName="milkFrequency"
          requiredStatus={true}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "sometimes", label: "Sometimes" },
          ]}
          error={errors?.milkFrequency}
          defaultText="Do you consume milk (products) thrice a week?"
        />

        <SelectTag
          register={register}
          registerName="carbonated"
          requiredStatus={true}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "maybe", label: "Maybe" },
          ]}
          error={errors?.carbonated}
          defaultText="Do you consume carbonated drinks?"
        />

        <SelectTag
          register={register}
          registerName="snackHabit"
          requiredStatus={true}
          options={[
            { value: "more_than_5_times", label: "> 5 times" },
            { value: "less_than_5_times", label: "< 5 times" },
            { value: "not_sure", label: "Not Sure!" },
          ]}
          error={errors?.snackHabit}
          defaultText="How often do you eat outside food per week?"
        />

        <SelectTag
          register={register}
          registerName="waterIntake"
          requiredStatus={true}
          options={[
            { value: "", label: "need options" },
            { value: "", label: "need options" },
            { value: "", label: "need options" },
          ]}
          error={errors?.waterIntake}
          defaultText=" Water intake question? PENDING-CHANGE"
        />

        <SelectTag
          register={register}
          registerName="saltType"
          requiredStatus={true}
          options={[
            { value: "pink_salt", label: "Pink Salt" },
            { value: "iodized_salt", label: "Iodized Salt" },
            { value: "kosher_salt", label: "Kosher Salt" },
            { value: "rock_salt", label: "Rock Salt" },
            { value: "sea_salt", label: "Sea Salt" },
            { value: "black_salt", label: "Black Salt" },
          ]}
          error={errors?.saltType}
          defaultText=" Type of Salt you use?"
        />

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  );
};


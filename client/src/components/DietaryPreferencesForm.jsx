// src/components/DietaryPreferencesForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMsg } from "./common/ErrorMsg";
import { Heading } from "./common/Heading";
import { SelectTag } from "./common/SelectTag";

export const DietaryPreferencesForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const waterIntake = watch("waterIntake") || 0;


  const submitForm = data => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>

      <fieldset>

        <Heading title={"Dietary Preferences"} />

        <SelectTag
          label={"Are you?"}
          register={register}
          registerName={"dietType"}
          requiredStatus={false}
          options={[
            { value: "vegetarian", label: "Vegetarian" },
            { value: "nonVeg", label: "Non-Vegetarian (more than 2 days a week)" },
            { value: "vegan", label: "Vegan" },
            { value: "glutenFree", label: "Gluten Free" },
            { value: "lactoseFree", label: "Lactose Free" },
            { value: "eggetarian", label: "Eggetarian" },
          ]}
          error={errors?.dietType}
          defaultText={"Please choose..."}
        />

        {/* <label>
          Do you tend to skip meals?
          <span style={{ fontSize: "0.7rem", color: "gray" }}>(You can select multiple)</span>
          <div style={{ marginLeft: "0.5rem" }}>
            <CheckBoxTag label={"Breakfast"} register={register} registerName={"mealsSkipped"} value={"breakfast"} />
            <CheckBoxTag label={"Lunch"} register={register} registerName={"mealsSkipped"} value={"lunch"} />
            <CheckBoxTag label={"Dinner"} register={register} registerName={"mealsSkipped"} value={"dinner"} />
          </div>
        </label> */}

        <SelectTag
          label={"Do you tend to skip meals?"}
          register={register}
          registerName={"mealsSkipped"}
          requiredStatus={false}
          options={[
            { value: "breakfast", label: "Breakfast" },
            { value: "lunch", label: "Lunch" },
            { value: "dinner", label: "Dinner" },
            { value: "none", label: "Never" },
          ]}
          error={errors?.mealsSkipped}
          defaultText={"Please choose..."}
        />

        {/* <SelectTag
          register={register}
          registerName={"compensatoryEater"}
          requiredStatus={false}
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "not_sure", label: "Not Sure" }]}
          error={errors?.compensatoryEater}
          defaultText={"Are you a compensatory eater?"}
        /> */}

        <SelectTag
          label={"Are you a TV-eater? PLEASE-SUGGEST?"}
          register={register}
          registerName={"tvEater"}
          requiredStatus={false}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "sometimes", label: "Sometimes" },
          ]}
          error={errors?.tvEater}
          defaultText={"Please choose..."}
        />

        <SelectTag
          label={"Gap between dinner and sleep?"}
          register={register}
          registerName={"dinnerSleepGap"}
          requiredStatus={false}
          options={[
            { value: "1_2hrs", label: "1-2 hours" },
            { value: "below_1hr", label: "Below 1 hour" },
            { value: "no_gap", label: "I sleep immediately after dinner" },
          ]}
          error={errors?.dinnerSleepGap}
          defaultText={"Please choose..."}
        />

        <SelectTag
          label={"How often do you eat fruits?"}
          register={register}
          registerName="fruitFrequency"
          requiredStatus={false}
          options={[
            { value: "once", label: "Once a week" },
            { value: "twice", label: "Twice a week" },
            { value: "more_than_three", label: "More than 3 times a week" },
            { value: "rarely", label: "Not really / Sometimes" },
          ]}
          error={errors?.fruitFrequency}
          defaultText="Please choose..."
        />

        <SelectTag
          label={"How often do you eat green vegetables?"}
          register={register}
          registerName="greensFrequency"
          requiredStatus={false}
          options={[
            { value: "once", label: "Once a week" },
            { value: "twice", label: "Twice a week" },
            { value: "more_than_three", label: "More than 3 times a week" },
            { value: "rarely", label: "Not really / Sometimes" },
          ]}
          error={errors?.greensFrequency}
          defaultText="Please choose..."
        />

        <SelectTag
          label={"Do you consume milk (products) thrice a week?"}
          register={register}
          registerName="milkFrequency"
          requiredStatus={false}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "sometimes", label: "Sometimes" },
          ]}
          error={errors?.milkFrequency}
          defaultText="Please choose..."
        />

        <SelectTag
          label={"Do you consume carbonated drinks?"}
          register={register}
          registerName="carbonated"
          requiredStatus={false}
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "maybe", label: "Maybe" },
          ]}
          error={errors?.carbonated}
          defaultText="Please choose..."
        />

        <SelectTag
          label={"How often do you eat outside food per week?"}
          register={register}
          registerName="snackHabit"
          requiredStatus={false}
          options={[
            { value: "daily", label: "Daily" },
            { value: "more_than_5_times", label: "> 5 times" },
            { value: "less_than_5_times", label: "< 5 times" },
            { value: "not_sure", label: "Not Sure!" },
          ]}
          error={errors?.snackHabit}
          defaultText="Please choose..."
        />

        {/* <SelectTag
          label={"How much water do you consume per day?"}
          register={register}
          registerName="waterIntake"
          requiredStatus={false}
          options={[
            { value: "", label: "need options" },
            { value: "", label: "need options" },
            { value: "", label: "need options" },
          ]}
          error={errors?.waterIntake}
          defaultText="Please choose..."
        /> */}

        <label>
          How much water do you consume per day?
          <div className="slider-container" >
            <input
              className="water-slider"
              type="range"
              min="0"
              max="5"
              step="0.5"
              {...register("waterIntake", {
                required: "This field is required"
              })}
            />
            <div className="slider-label">{waterIntake} L</div>
          </div>
          <ErrorMsg err={errors?.waterIntake?.message} />
        </label>

        {/* <SelectTag
          register={register}
          registerName="saltType"
          requiredStatus={false}
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
        /> */}

      </fieldset>

      <button type="submit">Save & Continue</button>

    </form>
  );
};


import React from "react";
import FormComponent from "./FormComponent";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
  BUTTON: "button",
};

const CommonForm = ({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}: any) => {
  function renderFormElement(getCurrentElement: any) {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <FormComponent
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            placeholder={getCurrentElement.placeholder}
            id={getCurrentElement.id}
            type={getCurrentElement.type}
            value={formData[getCurrentElement.name]}
            buttonText={getCurrentElement.buttonText}
            onChange={(event: any) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        break;
    }
    return content;
  }

  return (
    <form
      onSubmit={onHandleSubmit}
      className=" flex justify-center items-center  shadow-lg bg-white">
      <div className=" max-h-[400px] p-5 flex flex-col gap-3">
        {formControls?.length
          ? formControls.map((singleFormElement: any, index: any) => {
              return (
                <div key={index}>{renderFormElement(singleFormElement)}</div>
              );
            })
          : null}
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
};

export default CommonForm;

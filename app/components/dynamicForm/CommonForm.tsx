import React from "react";
import FormComponent from "./FormComponent";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
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
  console.log(formControls);

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElement: any, index: any) => {
            return (
              <React.Fragment key={index}>
                {renderFormElement(singleFormElement)}
              </React.Fragment>
            );
          })
        : null}
      <button type="submit">{buttonText || "Submit"}</button>{" "}
    </form>
  );
};

export default CommonForm;

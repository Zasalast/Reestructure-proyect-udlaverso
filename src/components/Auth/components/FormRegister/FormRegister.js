import React from "react";

import * as moment from "moment";
import { useTranslation } from "react-i18next";

const FormRegister = ({ form }) => {
  const { t } = useTranslation();

  //const { Option } = Select;
  const currentDate = moment();

  const validateToNextPassword = (rule, value, callback) => {
    if (value /*&& this.state.confirmDirty*/) {
      /*     validateFields(["confirm"], { force: true }); */
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    /*  if (value && value !== getFieldValue("password")) {
      callback(t("inconsistent_password"));
    } else {
      callback();
    } */
  };

  const validateTerms = (rule, value, callback) => {
    /*   if (!value) {
      callback(t("accept_privacy"));
    } else {
      callback();
    } */
  };

  const validateLength = (rule, value, callback) => {
    /*   if (value && value.length < 3) {
      callback(t("minimum"));
    }
    if (value && value.length > 60) {
      callback(t("maximum"));
    } else {
      callback();
    } */
  };

  const validateTime = (rule, value, callback) => {
    /*   if (value) {
      const value_format = value.format("DD/MM/YYYY");
      const date_user = moment(value_format, "DD/MM/YYYY");
      if (currentDate.diff(date_user, "years") <= 18) {
        callback(t("not_age"));
      } else {
        callback();
      }
    } else {
      callback();
    } */
  };

  const handleSubmit = (e) => {
    /*    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      } else {
        console.log("error", err);
      }
    }); */
  };

  const handleConfirmBlur = () => {
    //const { value } = e.target;
    //console.log('handle confir blur', value);
    //this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  const handleChange = () => {
    // console.log(`selected ${value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      {/*Nombre, Apellido*/}
      <div className="row">
        <div className="container ">
          <label label={t("name_first")} hasFeedback className="text-huge">
            {t("name_first")}
          </label>
          <input
            id="test10"
            placeholder={`${t("pleace")}s ${t("name_first")}`}
            type="text"
            required={true}
            className="input input-fullWidth"
          />
        </div>
        <div className="container ">
          <label label={t("name_last")}>{t("name_last")}</label>{" "}
          <input
            id="test10"
            placeholder={`${t("pleace")}s ${t("name_last")}`}
            type="text"
            className="input input-fullWidth"
          />
        </div>
      </div>

      {/*correo, telefono*/}
      <div className="container ">
        <div className="container ">
          <label label={t("mail")}>{t("mail")}</label>
          <input
            id="test10"
            placeholder={`${t("pleace")} ${t("mail")}`}
            type="text"
            className="input input-fullWidth"
          />
        </div>
        <div className="container ">
          <label label={t("phone")}>{t("phone")}</label>{" "}
          <input
            id="phone"
            placeholder={`${t("pleace")} ${t("phone")}`}
            type="text"
            className="input input-fullWidth"
          />
        </div>
      </div>

      {/*edad, sexo, estadoc ivil*/}
      <div className="row">
        <div className="container ">
          <div label={t("sex")}>
            <label className="label" for="country-code">
              {`${t("pleace_select")} ${t("sex")}`}
            </label>{" "}
            <select onChange={handleChange} className="select select-fullWidth">
              <option value="F">F</option>
              <option value="M">M</option>
            </select>
          </div>
        </div>
        <div className="container ">
          <div label={t("status_marital")}>
            {`${t("pleace_select")} ${t("status_marital")}`}
            <select onChange={handleChange} className="select select-fullWidth">
              <option value="single">{t("single")}</option>
              <option value="married">{t("married")}</option>
            </select>
          </div>
        </div>
      </div>

      {/*fecha de nacimiento, lugar de nacimiento*/}
      <div className="row">
        <div className="radio col-sm-4">
          <div label={t("birthdate")}>
            {`${t("pleace_select")} ${t("birthdate")}`}{" "}
            <input
              id="radio1"
              name="radio"
              type="date"
              value=""
              className="input input-fullWidth"
            />
          </div>
        </div>
        <div className="col-sm-10">
          <div label={t("place_birth")}>
            <input
              id="radio1"
              name="radio"
              type="radio"
              value=""
              placeholder={`${t("pleace")} ${t("place_birth")}`}
            />
          </div>
        </div>
      </div>

      {/*pasaporte, numero de pasaporte*/}
      <div className="row">
        <div className="col-sm-5">
          <div label={t("passport")}>
            <input
              id="radio1"
              name="radio"
              type="radio"
              value=""
              placeholder={`${t("pleace")} ${t("passport")}`}
            />
          </div>
        </div>
        <div className="col-sm-9">
          <div label={t("passport_number")}>
            <input
              id="radio1"
              name="radio"
              type="radio"
              value=""
              placeholder={`${t("pleace")} ${t("passport_number")}`}
            />
          </div>
        </div>
      </div>

      {/*contrasena/ confirmacion*/}
      <div className="container ">
        <div className="container ">
          <div label={t("password")}>{t("password")}</div>{" "}
          <input
            id="radio1"
            name="radio"
            type="password"
            value=""
            placeholder={`${t("pleace")} ${t("password")}`}
          />
        </div>
        <div className="container ">
          <div label={t("confirm_password")}>{t("confirm_password")}</div>
          <input
            id="radio1"
            name="radio"
            type="password"
            value=""
            onBlur={handleConfirmBlur}
            placeholder={`${t("pleace_confirm")} ${t("confirm_password")}`}
          />
        </div>
      </div>

      {/*politicas*/}
      <div className="row">
        <div className="container ">
          <div>
            <input
              id="one"
              name="#"
              type="checkbox"
              value=""
              placeholder={t("terms")}
            />
          </div>
        </div>
      </div>

      {/*subtmit*/}
      <div className="container  " type="flex" justify="end">
        <div className="container-medium">
          <div>
            <button>{t("register")}</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export { FormRegister };

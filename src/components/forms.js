import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../css/forms.css";
import { BsSearch } from "react-icons/bs";
import { IoHeartCircleOutline } from "react-icons/io5";
import { GiRecycle } from "react-icons/gi";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const form = (props) => {
    return (
      <Form className="col">
        <Field
          className="p-1 border-0 bg-dark text-white outline-0"
          as="select"
        >
          <option value="USD">USD</option>
          <option selected value="EGY">
            EGY
          </option>
          <option value="UK">UK</option>
        </Field>

        <Field
          className="p-1  border-0 bg-dark text-white outline-0"
          component="select"
        >
          <option value="English">English</option>
          <option selected value="Arabic">
            Arabic
          </option>
        </Field>
      </Form>
    );
  };

  return <Formik>{form}</Formik>;
};

export const Search = () => {
  const form = (props) => {
    return (
      <Form className="search col position-relative ">
        <Field
          className="form-control px-5 "
          type="search"
          name="name"
          dir="auto"
        />
        <Link to="/">
          <BsSearch className="position-absolute fs-4 search-icon" />
        </Link>
      </Form>
    );
  };

  return <Formik initialValues={{ name: "" }}>{form}</Formik>;
};

export const ResSearch = () => {
  const form = (props) => {
    return (
      <Form className=" text-center position-relative re-search m-0 p-0">
        {" "}
        <Field
          className="form-control px-1 "
          type="search"
          name="name"
          dir="auto"
        />
        <Link className=" btn bg-warning w-75 my-3 outline-0 border-0" to="/">
          search
        </Link>
      </Form>
    );
  };

  return <Formik initialValues={{ name: "" }}>{form}</Formik>;
};

export const Login = () => {
  const form = (props) => {
    return (
      <Form>
        <div className="fs-1 text-center bg-dark text-warning mb-3 text-capitalize">
          login
        </div>
        <label className="fs-5 mb-3"> Username : </label>
        <Field className="form-control px-1" type="email" name="email" />
        <ErrorMessage name="email" />
        <br />
        <label className="fs-5 mb-3"> Password : </label>
        <Field className="form-control px-1" type="password" name="password" />
        <ErrorMessage name="password" />
        <br />
        <Link className=" btn bg-warning  my-3 outline-0 border-0" to="/">
          login
        </Link>
        <Link className="ms-3" to="/register">
          register
        </Link>
      </Form>
    );
  };

  return (
    <div className="container login">
      {" "}
      <Formik initialValues={{ email: "", password: "" }}>{form}</Formik>
    </div>
  );
};

export const Register = () => {
  const form = (props) => {
    return (
      <Form>
        <div className="fs-1 text-center bg-dark text-warning mb-3 text-capitalize">
          register
        </div>
        <div className="row">
          {" "}
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> first name : </label>
            <Field className="form-control px-1" type="text" name="first" />
            <ErrorMessage name="first" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> last name : </label>
            <Field className="form-control px-1" type="text" name="last" />
            <ErrorMessage name="last" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> e-mail : </label>
            <Field className="form-control px-1" type="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> password : </label>
            <Field
              className="form-control px-1"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> address : </label>
            <Field className="form-control px-1" type="text" name="address" />
            <ErrorMessage name="address" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> street : </label>
            <Field className="form-control px-1" type="text" name="street" />
            <ErrorMessage name="street" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> location : </label>
            <Field className="form-control px-1" type="text" name="location" />
            <ErrorMessage name="location" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> zip code : </label>
            <Field className="form-control px-1" type="text" name="code" />
            <ErrorMessage name="code" />
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            {" "}
            <label className="fs-5 mb-3 text-capitalize"> card number : </label>
            <Field className="form-control px-1" type="tel" name="card" />
            <ErrorMessage name="card" />
          </div>
          <div>
            {" "}
            <Field className="px-1" type="checkbox" name="check" checked />{" "}
            <label className="fs-5 mb-3 text-capitalize">
              {" "}
              i agree with rules .{" "}
            </label>
            <ErrorMessage name="check" />
          </div>
        </div>

        <Link className=" btn bg-warning  my-3 outline-0 border-0" to="/">
          register
        </Link>
      </Form>
    );
  };

  return (
    <div className="container register">
      {" "}
      <Formik
        initialValues={{
          first: "",
          last: "",
          email: "",
          password: "",
          address: "",
          location: "",
          street: "",
          code: "",
          card: "",
        }}
      >
        {form}
      </Formik>
    </div>
  );
};

export const Quantity = () => {
  const False = (e) => {
    if (e.target.value) {
      return;
    }

    console.log(e.target.value);
  };
  const form = (props) => {
    return (
      <Form>
        <div className="row">
          {" "}
          Size :{" "}
          <Field
            className="form-control px-1 w-25 col-6 me-5"
            component="select"
            name="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Field>
          Quantity :{" "}
          <Field
            className="form-control px-1 w-25 col-6"
            type="number"
            name="number"
            onClick={False}
          />
        </div>

        <Link
          className="me-2 btn bg-warning  my-3 outline-0 border-0"
          to="/product-details"
        >
          add to cart
        </Link>

        <Link className="me-2 fs-2 text-dark" to="/product-details">
          <IoHeartCircleOutline />
        </Link>
        <Link className=" fs-4 text-dark" to="/product-details">
          <GiRecycle />
        </Link>
      </Form>
    );
  };

  return (
    <div className="container">
      {" "}
      <Formik initialValues={{ select: "1", number: "1" }}>{form}</Formik>
    </div>
  );
};

export const Billing = () => {
  const form = (props) => {
    return (
      <Form>
        {" "}
        <h2 className="text-uppercase mb-5">billing details</h2>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">first name</label>
          </div>
          <div className="col">
            <Field type="text" className="form-control" name="first" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">last name</label>
          </div>
          <div className="col">
            <Field type="text" className="form-control" name="last" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">company name</label>
          </div>
          <div className="col">
            <Field type="text" className="form-control" name="company" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">e-mail</label>
          </div>
          <div className="col">
            <Field type="email" className="form-control" name="email" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">phone number</label>
          </div>
          <div className="col">
            <Field type="tel" className="form-control" name="phone" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="text-capitalize">address</label>
          </div>
          <div className="col">
            <Field type="text" className="form-control" name="address" />
          </div>
        </div>
        <div className="checkbox">
          {" "}
          <Field type="checkbox" />
          <label className="text-capitalize ms-3 text-secondary">
            create an account
          </label>
        </div>
        <div className="checkbox my-5">
          <h2 className="text-uppercase">additional information</h2>
        </div>
        <div className="row">
          <div className="col-3">
            <label className="text-capitalize">order notes</label>
          </div>
          <div className="col mb-5">
            <textarea
              type="text"
              className="form-control"
              rows="7"
              name="textarea"
            />
          </div>
        </div>{" "}
      </Form>
    );
  };

  return (
    <Formik
      initialValues={{
        first: "",
        last: "",
        company: "",
        email: "",
        phone: "",
        address: "",
        textarea: "",
      }}
    >
      {form}
    </Formik>
  );
};

export const ContactUS = () => {
  const form = (props) => {
    return (
      <Form>
        {" "}
        <div className="row mb-3">
          <div className="col">
            <label className="text-capitalize">first name</label>
            <Field type="text" className="form-control" name="first" />
          </div>

          <div className="col">
            <label className="text-capitalize">e-mail</label>
            <Field type="email" className="form-control" name="email" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {" "}
            <label className="text-capitalize">your message</label>
            <textarea
              type="text"
              className="form-control"
              rows="7"
              name="textarea"
            />
          </div>
        </div>{" "}
        <div className="mt-3">
          {" "}
          <Link className="text-white rounded-pill bg-warning py-2 fs-4 px-3">
            send your message
          </Link>
        </div>
      </Form>
    );
  };

  return (
    <Formik
      initialValues={{
        first: "",
        email: "",
        textarea: "",
      }}
    >
      {form}
    </Formik>
  );
};

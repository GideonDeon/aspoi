import Foot from "../components/Copyright";
import PageNav from "../components/PageNav";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const membershipOptions = {
  fieldOperationalMembership: 37500,
  philantropicMembership: 225000,
  professionalMembershipIndividual: 180000,
  corporateMembership: 75000,
};

function Register() {
  return (
    <>
      <PageNav />
      <RegisterPage />
      <Foot />
    </>
  );
}

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const selectedMembership = watch("membership");

  const toTitleCase = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const camelToTitleCase = (str) => {
    return str
      .replace(/([A-Z])/g, " $1") 
      .trim() 
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  React.useEffect(() => {
    if (selectedMembership) {
      setValue("amount", membershipOptions[selectedMembership]);
    }
  }, [selectedMembership, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      if (imageFile) {
        formData.append("image", imageFile);
      }
      formData.append("fullname", toTitleCase(data.fullname));
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("membership", camelToTitleCase(data.membership));
      formData.append("amount", data.amount);

      const res = await fetch(
        "https://www.aspoi.name.ng/api/flutterwave/initialize",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (result.status && result.data.authorization_url) {
        window.open(result.data.authorization_url, "_blank");
      } else {
        alert("Failed to initialize payment");
      }
    } catch (err) {
      console.error(err);
      alert("Error initializing payment");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("Image size must not exceed 1MB");
        e.target.value = null;
        return;
      }
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleFullNameChange = (e) => {
    const input = e.target;
    const cursorPosition = input.selectionStart;
    const value = e.target.value;
    const titleCased = toTitleCase(value);

    setValue("fullname", titleCased, { shouldValidate: true });

    setTimeout(() => {
      input.setSelectionRange(cursorPosition, cursorPosition);
    }, 0);
  };

  return (
    <>
      <div>
        <h1 className="uppercase font-extrabold font-aldrich text-[20px] text-center mt-10">
          Registration form
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container rounded-2xl h-fit w-full pl-5 pr-5 mb-15 shadow-2xl sm:w-100 
                  sm:relative sm:left-[50%] sm:-translate-x-[50%] lg:w-120 font-roboto "
      >
        <h3 className="font-bold mb-5 mt-2 text-[18px]">Member Details:</h3>
        <div>
          <label className="font-bold font-roboto">
            Upload Image/Logo (max 1MB)
            <span className="text-red-500 text-[10px] -translate-y-1 inline-block">
              *
            </span>
          </label>
          <br />
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            onChange={handleImageUpload}
            className="border-2 border-gray-400 mb-2 rounded-[5px] w-23 cursor-pointer pl-1"
          />
          {errors.image && (
            <p className="text-white text-[10px] bg-red-500 rounded-[5px] w-fit p-1">
              This field is required!
            </p>
          )}
          {preview && <img src={preview} alt="preview" className="w-20 h-20" />}
        </div>
        <div>
          <label className="font-bold font-roboto">
            Full Name/ Organization Name
            <span className="text-red-500 text-[10px] -translate-y-1 inline-block">
              *
            </span>
          </label>
          <br />
          <input
            type="text"
            {...register("fullname", { required: "This field is required!" })}
            onChange={handleFullNameChange}
            placeholder="Full Name/ Organization Name"
            className="border-2 border-gray-400 mb-2 rounded-[5px] w-full h-10 p-2"
          />
          <br />

          {errors.fullname && (
            <p className="error text-white text-[10px] bg-red-500 rounded-[5px] w-fit p-1">
              {errors.fullname.message}
            </p>
          )}
        </div>
        <div>
          <label className="font-bold font-roboto">
            Phone Number{" "}
            <span className="text-red-500 text-[10px] -translate-y-1 inline-block">
              *
            </span>
          </label>
          <br />
          <input
            type="tel"
            placeholder="0000 000 0000"
            className="border-2 border-gray-400 mb-2 rounded-[5px] w-full h-10 p-2"
            {...register("phone", {
              required: "This field is required!",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="error text-white text-[10px] bg-red-500 rounded-[5px] w-fit p-1">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label className="font-bold font-roboto">
            Email{" "}
            <span className="text-red-500 text-[10px] -translate-y-1 inline-block">
              *
            </span>
          </label>
          <input
            type="email"
            placeholder="ex: email@gmail.com"
            className="border-2 border-gray-400 mb-2 rounded-[5px] w-full h-10 p-2"
            {...register("email", {
              required: "This field is required!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="error text-white text-[10px] bg-red-500 rounded-[5px] w-fit p-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label className="font-bold font-roboto">
            Membership{" "}
            <span className="text-red-500 text-[10px] -translate-y-1 inline-block">
              *
            </span>
          </label>
          <br />
          <select
            {...register("membership", { required: true })}
            className="border-2 border-gray-400 mb-2 rounded-[5px] w-full h-10 p-2"
          >
            <option value="">Select membership</option>
            <option value="fieldOperationalMembership">
              Field Operational Membership
            </option>
            <option value="philantropicMembership">
              Philantropic Membership
            </option>
            <option value="professionalMembershipIndividual">
              Professional Membership Individual
            </option>
            <option value="corporateMembership">Corporate Membership</option>
          </select>
          {errors.membership && (
            <p className="error text-white text-[10px] bg-red-500 rounded-[5px] w-fit p-1">
              This field is required!
            </p>
          )}
        </div>
        <div className="mt-2">
          <label className="font-bold font-roboto">
            Amount <span>&#8358;</span>
          </label>
          <input
            type="number"
            className=" rounded-[5px] w-20 h-7 p-1"
            {...register("amount")}
            readOnly
            value={
              selectedMembership ? membershipOptions[selectedMembership] : ""
            }
          />
          <p className="text-center text-[12px] italic">10% of the registration fee will be paid annually</p>
        </div>

        <button
          type="submit"
          className=" bg-black text-white hover:bg-[#feff00] hover:text-black uppercase cursor-pointer rounded-[10px] w-full h-10 mb-3 mt-2 transition-all delay-100"
        >
          Register
        </button>
      </form>
    </>
  );
}

export default Register;

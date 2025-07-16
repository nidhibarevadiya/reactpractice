import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    username: "",
    age: "",
    phoneno: "",
    address: "",
    gender: "",
    agree: false,
  });

  const EditUserData = async () => {
    const res = await fetch(`http://localhost:3000/users/${id}`);
    const data = await res.json();
    setEditUser(data);
  };

  useEffect(() => {
    EditUserData();
  }, [id]);

  const handleOptionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    });

    if (res.ok) {
      alert("User Updated Successfully!!");
      navigate("/");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-slate-100 to-slate-300 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Edit User
        </h1>

        {/* Username */}
        <div>
          <Label htmlFor="username" className="block mb-1 text-gray-700">
            Username
          </Label>
          <TextInput
            id="username"
            name="username"
            placeholder="Enter username"
            required
            value={editUser.username}
            onChange={handleOptionChange}
          />
        </div>

        {/* Age */}
        <div>
          <Label htmlFor="age" className="block mb-1 text-gray-700">
            Age
          </Label>
          <TextInput
            id="age"
            name="age"
            type="number"
            placeholder="Enter age"
            required
            value={editUser.age}
            onChange={handleOptionChange}
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phoneno" className="block mb-1 text-gray-700">
            Phone No
          </Label>
          <TextInput
            id="phoneno"
            name="phoneno"
            type="tel"
            placeholder="+91"
            required
            value={editUser.phoneno}
            onChange={handleOptionChange}
          />
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address" className="block mb-1 text-gray-700">
            Address
          </Label>
          <TextInput
            id="address"
            name="address"
            placeholder="Enter address"
            required
            value={editUser.address}
            onChange={handleOptionChange}
          />
        </div>

        {/* Gender */}
        <div>
          <Label className="block mb-1 text-gray-700">Gender</Label>
          <div className="flex gap-8">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={editUser.gender === "male"}
                onChange={handleOptionChange}
                className="accent-blue-600"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={editUser.gender === "female"}
                onChange={handleOptionChange}
                className="accent-pink-500"
              />
              Female
            </label>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            id="remember"
            name="agree"
            checked={editUser.agree}
            onChange={handleOptionChange}
          />
          <Label htmlFor="remember" className="text-gray-600">
            I agree to the terms
          </Label>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <Button color="gray" onClick={() => navigate("/")} type="button" className="w-1/2 mr-2">
            Back
          </Button>
          <Button type="submit" className="w-1/2 ml-2">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const AddUser = () => {
  return (
    <>
    <div className="h-screen flex justify-center items-center">
      <form className="flex max-w-md flex-col gap-4 w-[500px]">
        <Button color="purple">Add User Form</Button>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username">UserName</Label>
          </div>
          <TextInput
            id="username"
            type="text"
            placeholder="Enter Your Name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email">Your email</Label>
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city">Your City</Label>
          </div>
          <TextInput
            id="city"
            type="text"
            placeholder="Enter Your City"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="DOB">Your DOB</Label>
          </div>
          <TextInput
            id="dob"
            type="date"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="blood">Your Blood Group</Label>
          </div>
          <TextInput
            id="blood"
            type="text"
            placeholder="Enter Your Blood Group"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phone">Your Phone No</Label>
          </div>
          <TextInput id="phone" type="tel" required shadow />
        </div>
         <div>
          <div className="mb-2 block">
            <Label htmlFor="image">Image</Label>
          </div>
          <TextInput id="phone" type="file" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
          </Label>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </div>
    </>
  );
};

export default AddUser;
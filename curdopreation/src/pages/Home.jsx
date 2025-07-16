import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const AddNewUser = () => {
    navigate("/adduser");
  };

  const [user, setUser] = useState([]);

  const userData = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    userData();
  }, []);

const DeleteUser = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    });
    userData(); // Refresh data
  } catch (err) {
    console.error("Error deleting user:", err);
  }
};


return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">User Dashboard</h1>
        <button
          onClick={AddNewUser}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition duration-300"
        >
          + Add New User
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <Table>
            <TableHead className="bg-gray-200">
              <TableRow>
                <TableHeadCell className="text-gray-800 font-semibold">UserName</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Age</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Phone No</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Gender</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Address</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Edit</TableHeadCell>
                <TableHeadCell className="text-gray-800 font-semibold">Delete</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y">
              {user.map((data, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <TableCell className="font-medium text-gray-900">{data.username}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>{data.phoneno}</TableCell>
                  <TableCell>{data.gender}</TableCell>
                  <TableCell>{data.address}</TableCell>
                  <TableCell>
                    <Link
                      to={`/edituser/${data.id}`}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1 rounded-md transition"
                    >
                      Edit
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="bg-amber-600 hover:bg-red-600 text-white px-4 py-1 rounded-md transition"
                      pill
                      onClick={() => DeleteUser(data.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  </div>
);

};
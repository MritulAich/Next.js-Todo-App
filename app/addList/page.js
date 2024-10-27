"use client";
import ProtectedRoute from "@/components/protectedRoute";

function AddList() {
    return (
        <ProtectedRoute>
        
            <form className="max-w-sm mx-auto mt-8">
                <div className="mb-5">
                    <label className="block mb-2">Date Reminder :</label>
                    <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2">Task :</label>
                    <input type="text" id="task" placeholder="Task name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " required />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600">Add List</button>
            </form>
        </ProtectedRoute>
    )
}

export default AddList
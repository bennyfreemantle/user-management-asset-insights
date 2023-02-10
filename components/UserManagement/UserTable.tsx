import { User } from "@/types";

export default function UserTable({ users }: { users: User[] }) {
  if (users) {
    console.log(users);
  }
  return (
    <div>
      <table className="w-full text-zinc-50">
        <thead>
          <tr className="">
            <th className="text-left border-b">No.</th>
            <th className="text-left border-b">First Name.</th>
            <th className="text-left border-b">Last Name.</th>
            <th className="text-left border-b">Email.</th>
            <th className="text-left border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border-b" key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td className="text-left py-3">{user.id}</td>
              <td className="text-left py-3">{user.first_name}</td>
              <td className="text-left py-3">{user.last_name}</td>
              <td className="text-left py-3">{user.email}</td>
              <td className="text-left py-3">{user.createdAt.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

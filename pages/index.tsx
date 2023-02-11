import UserManagement from "@/components/UserManagement/UserManagement";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>User Management</title>
        <meta
          name="CRUD operations for a simple user"
          content="CRUD operations for a simple user"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UserManagement />
      </main>
    </>
  );
}

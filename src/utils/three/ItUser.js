

export const usersloader = async () => {
  const res = await fetch("/rmk-academia/students.json"); // fetches from public folder
  if (!res.ok) {
    throw Error("Unable to load Users details");
  }
  const data = await res.json();
  return data;
};

export const singleusersloader = async ({ params }) => {
  const res = await fetch("/rmk-academia/students.json");
  if (!res.ok) {
    throw Error("User details not found");
  }
  const data = await res.json();
  const user = data.find((item) => item.id === parseInt(params.id));
  if (!user) {
    throw Error("User with given ID not found");
  }
  return user;
};

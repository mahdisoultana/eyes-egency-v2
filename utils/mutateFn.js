import { toast } from "react-toastify";

export async function postMethod(data, url = "/api/contact", method = "POST") {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
    if (res.error) {
      toast.error(res.error);
      return;
    }
    return res;
  } catch (e) {
    toast.error(e.message);
    throw new Error(e);
  }
}

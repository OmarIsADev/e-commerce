import React from "react";
import Section from "../_comps/section";

const img = "https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg";

export default function Page() {
  return (
    <div>
      <Section
        label="Watches"
        data={[
          { id: 1, title: "watch3", img, price: 30},
          { id: 2, title: "watch2", img, price: 30},
          { id: 3, title: "watch", img, price: 10},
        ]}
      />
    </div>
  );
}
